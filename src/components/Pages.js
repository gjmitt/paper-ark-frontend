import React, { useState, useEffect } from 'react';
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3";
import PageControls from './PageControls';
import Page from './Page';

function Pages({ callNum, setShowPages, selectedMaterial }) {
  const [pageFiles, setpageFiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(getStartPage(selectedMaterial));
  const [firstPage, setFirstPage] = useState(1);

  useEffect(() => {
    const s3 = new S3Client({
      region: process.env.REACT_APP_REGION,
      credentials: fromCognitoIdentityPool({
        client: new CognitoIdentityClient({ region: process.env.REACT_APP_REGION }),
        identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
      }),
    });
    (async () => {
      try {
        const pagesData = await s3.send(
          new ListObjectsCommand({
            Prefix: `pages/${callNum}/`,
            Bucket: process.env.REACT_APP_BUCKET,
          })
        );
        setpageFiles(pagesData.Contents);

      } catch (err) {
        alert("There was an error viewing page images: " + err.message);
      }
    })();
  }, [callNum])

  function getStartPage(material) {
    // Start a book on page 3 to skip cover and spine, on 2 otherwise to skip cover.
    if (material === "Book") return 3;
    else return 2;
  }

  const handlePrev = () => setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage);
  const handleNext = () => setCurrentPage(currentPage < pageFiles.length ? currentPage + 1 : currentPage);
  const handleClose = () => setShowPages(false);

  return (
    <>
      {/* <h3>Pages</h3> */}
      <PageControls
        pageNum={currentPage}
        pageCount={pageFiles.length}
        onPrevClick={handlePrev}
        onNextClick={handleNext}
        onCloseClick={handleClose}
      />
      {pageFiles.length
        ? <Page filename={pageFiles[currentPage - 1].Key} />
        : null
      }
    </>
  )
}

export default Pages