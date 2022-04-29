import React, { useState, useEffect } from 'react';
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3";
import Page from './Page';

function Pages({ callNum, setShowPages }) {
  const [pageFiles, setpageFiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(2); // start on 2nd page to skip cover

  // console.log("Pages render callnum:", callNum);

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

  const handlePrev = () => setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage);
  const handleNext = () => setCurrentPage(currentPage < pageFiles.length ? currentPage + 1 : currentPage);
  const handleClose = () => setShowPages(false);

  return (
    <>
      {/* <h3>Pages</h3> */}
      <button disabled={currentPage === 0} onClick={handlePrev}>Prev</button>
      <button disabled={currentPage === pageFiles.length} onClick={handleNext}>Next</button>
      <button onClick={handleClose}>Close</button>
      {pageFiles.length
        ? <Page filename={pageFiles[currentPage - 1].Key} />
        : null
      }
    </>
  )
}

export default Pages