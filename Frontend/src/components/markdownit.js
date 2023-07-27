import React, { useState } from 'react';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

const ResumeBuilder = () => {
    const [resumeContent, setResumeContent] = useState('');

    const handleInputChange = (event) => {
        setResumeContent(event.target.value);
    };

    return (
        <div>
            <h1>Resume Builder</h1>
            <textarea value={resumeContent} onChange={handleInputChange} />
            <div dangerouslySetInnerHTML={{ __html: md.render(resumeContent) }} />
        </div>
    );
};

export default ResumeBuilder;
