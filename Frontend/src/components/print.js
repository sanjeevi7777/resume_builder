import React, { useEffect, useState, useRef } from 'react';
import Template1 from './Template1';
import Template2 from './Template2';
import Template3 from './Template3';
import Template4 from './template1(a)';
import { useParams } from 'react-router-dom';
import html2canvas from 'html2canvas';
import NavBar from './navBar';
import '../style/print.css';
import jsPDF from 'jspdf';
import { Button } from '@chakra-ui/react';
import { DownloadIcon, CalendarIcon, EditIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';

function Print() {
    const navigate = useNavigate();
    let { value } = useParams();
    const [component, setComponent] = useState(null);
    const componentRef = useRef(null);
    const [iframeLoaded, setIframeLoaded] = useState(false);
 
    const handleDownloadClick = () => {
        // Ensure the iframe has loaded its content
        if (iframeLoaded) {
            const iframe = componentRef.current;
            const iframeDocument = iframe.contentDocument;
            
            // Use html2canvas to capture the iframe content as an image
            html2canvas(iframeDocument.body).then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4'); // Create a new PDF document
                const imgWidth = pdf.internal.pageSize.getWidth();
                const imgHeight = (canvas.height * imgWidth) / canvas.width;

                // Add the captured image to the PDF
                pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

                // Download the PDF with a specified filename
                pdf.save('download.pdf');
            });
        } else {
            alert('Please wait for the resume to load before downloading.');
        }
    };

    const handlePrintClick = () => {
        // Only print the iframe content if it has loaded
        if (iframeLoaded) {
          const iframe = componentRef.current;
          const iframeWindow = iframe.contentWindow;
          
          iframeWindow.print();
        } else {
          alert('Please wait for the resume to load before printing.');
        }
      };
      
    

    useEffect(() => {
        if (value === '1') {
            setComponent(<Template1 />);
        } else if (value === '2') {
            setComponent(<Template2 />);
        } else if (value === '3') {
            setComponent(<Template3 />);
        } else {
            setComponent(<Template4 />);
        }
    }, [value]);

    // Convert the React component to an HTML string
    const componentHtml = component ? ReactDOMServer.renderToStaticMarkup(component) : '';

    const handleTemplateClick = (templateValue) => {
        setComponent(getTemplateComponent(templateValue)); // Set the component based on the template value
        navigate(`/print/${templateValue}`); // Navigate to the selected template
        setIframeLoaded(false); // Reset iframeLoaded when changing templates
    };

    const getTemplateComponent = (templateValue) => {
        if (templateValue === '1') {
            return <Template1 />;
        } else if (templateValue === '2') {
            return <Template2 />;
        } else if (templateValue === '3') {
            return <Template3 />;
        } else {
            return <Template4 />;
        }
    };
    const jwtToken = localStorage.getItem('jwtToken'); 

    if (!jwtToken) {
        return <div>Please log in to access this page.</div>;
    }
    return (
        <>
            <NavBar />
            <div className='mainprint'>
                <div className='leftprint'>
                    <div className='butt'>
                        <div className='down'>
                            <Button colorScheme='telegram' onClick={() => navigate(`/sidebar/${value}`)}>
                                <EditIcon />&nbsp; Edit
                            </Button>
                        </div>
                        <div className='down'>
                            <Button colorScheme='telegram' onClick={handleDownloadClick}>
                                Download &nbsp;<DownloadIcon />
                            </Button>
                        </div>
                        <div className='prin'>
                            <Button colorScheme='green' onClick={handlePrintClick}>
                                Print &nbsp;<CalendarIcon />
                            </Button>
                        </div>
                    </div>
                    <div>
                        <div id='restext'>
                            {/* Display the HTML content inside the iframe */}
                            <iframe
                                title="Resume Preview"
                                id="print"
                                srcDoc={`<!DOCTYPE html><html><body>${componentHtml}</body></html>`} // Adjust the srcDoc here
                                style={{ width: '100%', height: '600px', border: 'none' }}
                                onLoad={() => setIframeLoaded(true)} // Set iframeLoaded to true when the iframe content has loaded
                                ref={componentRef} // Add a ref to the iframe element
                            />
                        </div>
                    </div>
                </div>
                <div className='rightprint'>
                    <div className='lefttemp'>
                        <div className='leftleft1' onClick={() => handleTemplateClick('1')}></div>
                        <div className='leftright1' onClick={() => handleTemplateClick('3')}></div>
                    </div>
                    <div className='lefttemp'>
                        <div className='leftleft2' onClick={() => handleTemplateClick('2')}></div>
                        <div className='leftright2' onClick={() => handleTemplateClick('4')}></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Print;
