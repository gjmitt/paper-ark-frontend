import React, { useState, useEffect } from 'react';
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3";
import PageControls from './PageControls';
import Page from './Page';

function Pages({ callNum, setShowPages }) {
  const [pageFiles, setpageFiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(3);  // start on the 3rd page to skip cover and spine 

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
  }, [])

  const handlePrev = () => setCurrentPage(currentPage > 1 ? currentPage - 1 : 0);
  const handleNext = () => setCurrentPage(currentPage < pageFiles.length ? currentPage + 1 : currentPage);
  const handleClose = () => setShowPages(false);
  // const handlePlay = () => null;

  console.log(currentPage);

  return (
    <>
      <h3>Pages</h3>
      {pageFiles.length
        ? <Page filename={pageFiles[currentPage - 1].Key} />
        : null
      }
      <PageControls
        pageNum={currentPage}
        pageCount={pageFiles.length}
        onPrevClick={handlePrev}
        onNextClick={handleNext}
        // onPlayClick={handlePlay}
        onCloseClick={handleClose}
      />
    </>
  )
}

export default Pages