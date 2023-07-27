import React, { useEffect, useState, useRef } from 'react';
import Template1 from './Template1';
import Template2 from './Template2';
import Template3 from './Template3';
import Template4 from './template1';
import { useParams } from 'react-router-dom';
import html2canvas from 'html2canvas';
import NavBar from './navBar';
import '../style/print.css';
import jsPDF from 'jspdf';
import { Button} from '@chakra-ui/react';
import { DownloadIcon, CalendarIcon } from '@chakra-ui/icons'
function Print() {
    const { value } = useParams();
    const componentRef = useRef(null);
    const [component, setComponent] = useState(null);

    const handleDownloadClick = () => {
        const input = document.getElementById('print');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 0, 0);
                pdf.save('download.pdf');
            });
    };

    const handlePrintClick = () => {
        const printContents = componentRef.current;
        const originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents.innerHTML;
        window.print();
        document.body.innerHTML = originalContents;
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

    return (
        <>
            <NavBar />
            <div className='mainprint'>
                <div className='leftprint'>
                    <div className='butt'>
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
                    <div id='print' ref={componentRef}>
                        <div className='restext'>

                    <h2>Resume</h2>
                        </div>
                        {component}
                    </div>
                    
                </div>
                <div className='rightprint'>
                    <div className='lefttemp'>
                        <div className='leftleft1' onClick={()=>setComponent(<Template1/>)}>

                        </div>
                        <div className='leftright1' onClick={() => setComponent(<Template2 />)}>

                        </div>
                    </div>
                    <div className='lefttemp'>
                        <div className='leftleft2' onClick={() => setComponent(<Template3 />)}>

                        </div>
                        <div className='leftright2' onClick={() => setComponent(<Template4 />)}>

                        </div>
                    </div>
                   
                </div>
            </div>
        </>
    );
}

export default Print;
