import React,{useState} from 'react'
// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library
import './CreateBlog.css'
import {storage} from '../../Firebase'

import { CreateBlogContainer,CreateBlogBox1,CreateBlogBox2, CreateBlogView, CreateBlogChoose, CreateBlogUpload, CreateBlogBox3 } from './CreateBlogElements';

const CreateBlog = () => {

    const defaultLayoutPluginInstance = defaultLayoutPlugin();
  
    // for onchange event
    const [pdfFile, setPdfFile]=useState(null);
    const [pdfFileError, setPdfFileError]=useState('');

    // for submit event
    const [viewPdf, setViewPdf]=useState(null);

    // const [pdf,setPdf] = useState(null);

    const [selectedFile,setSelectedFile] = useState('woses');
    // let selectedFile = null;
    const storageRef = storage.ref();

    const fileType=['application/pdf'];
    const handlePdfFileChange=(e)=>{
        let x = e.target.files[0]
        let y = e.target.files[1]
        setSelectedFile(x);
        // setSelectedFile({...selectedFile,file : x});
        // selectedFile = e.target.files[0]
        console.log('selected x',x)
        console.log('selected y',y)
        console.log('selected File',selectedFile)
        if(x){
          if(x&&fileType.includes(x.type)){
            let reader = new FileReader();
                reader.readAsDataURL(x);
                reader.onloadend = (e) =>{
                  setPdfFile(e.target.result);
                  setPdfFileError('');
                }
                
          }
          else{
            setPdfFile(null);
            setPdfFileError('Please select valid pdf file');
          }
        }
        else{
          console.log('select your file');
        }
      }

      const handlePdfView = (e) =>
      {
          e.preventDefault();
          if(pdfFile != null)
          {
              setViewPdf(pdfFile);
              console.log('view',viewPdf)
            }
        }

        const handlePdfFileSubmit=(e)=>{
    
          const imageRef = storageRef.child('pdf/test.pdf')
          console.log("entered Upload")
          e.preventDefault();
          if(pdfFile!==null){
            const storageRef = storage.ref();
            var metadata = {
              contentType : 'pdf',
              // contentType : 'image/jpeg'
            };
            
            // const imageRef = storageRef.child('image/photo.jpg')
            console.log('before upload',selectedFile)
            alert('Uploading Please Wait')
            imageRef.put(selectedFile)
            .then(() => {
              alert('uploaded pdf')
              console.log('after upload',selectedFile)
            })
          setViewPdf(pdfFile);
          }
          else{
            setViewPdf(null);
          }
        }

    return (
        <div>
            <CreateBlogContainer>

                <CreateBlogBox1>

                <CreateBlogChoose type = 'file' required onChange = {handlePdfFileChange}/>


                  <CreateBlogBox3>
                    <CreateBlogView onClick = {(e) => handlePdfView(e)}>View</CreateBlogView>
                    <CreateBlogUpload onClick = {(e) => handlePdfFileSubmit(e)}>Upload</CreateBlogUpload>
                  </CreateBlogBox3>
                    
                </CreateBlogBox1>

                <CreateBlogBox2>
                {viewPdf&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                    <Viewer className = 'Viewer' fileUrl={viewPdf}
                    plugins={[defaultLayoutPluginInstance]} />
                </Worker></>}
                </CreateBlogBox2>
            </CreateBlogContainer>
        </div>
    )
}

export default CreateBlog
