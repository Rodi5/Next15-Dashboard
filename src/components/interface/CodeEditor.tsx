'use client';

import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // Dark theme
import 'prismjs/themes/prism.css'; // Light theme
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup'; // HTML

const CodeEditor = () => {
  const [code, setCode] = useState(
    `<script>
$(document).ready(function() {

  var editor_one = CodeMirror.fromTextArea(document.getElementById("code1"), {
    lineNumbers: true,
    matchBrackets: true,
    styleActiveLine: true,
    theme: "ambiance"
  });

  var editor_two = CodeMirror.fromTextArea(document.getElementById("code2"), {
    lineNumbers: true,
    matchBrackets: true,
    styleActiveLine: true
  });

});
</script>
  `);

  return (
    <div className="bg-white flex flex-col items-center justify-center p-6 gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        {/* Dark Code Editor */}
        <div className="bg-gray-800 shadow-lg overflow-hidden">
          <div className="p-4 bg-gray-700 border-b border-gray-600">
            <p className="text-gray-300 text-sm font-medium">
              Dark Code Editor
            </p>
          </div>
          <div
            className="p-4 overflow-auto"
            style={{
              maxHeight: '400px',
              maxWidth: '100%',
            }}
          >
            <Editor
              value={code}
              onValueChange={(newCode) => setCode(newCode)}
              highlight={(code) =>
                Prism.highlight(code, Prism.languages.javascript, 'javascript')
              }
              padding={10}
              className="bg-gray-900 text-white font-mono text-sm rounded-lg border border-gray-600 focus:outline-none"
              style={{
                minHeight: '300px',
                overflowY: 'auto',
                overflowX: 'auto',
                fontFamily: 'monospace',
                fontSize: '14px',
                lineHeight: '1.5',
              }}
            />
          </div>
        </div>

        {/* Light Code Editor */}
        <div className="bg-white shadow-lg overflow-hidden">
          <div className="p-4 bg-gray-200 border-b border-gray-300">
            <p className="text-gray-800 text-sm font-medium">
              Light Code Editor
            </p>
          </div>
          <div
            className="p-4 overflow-auto"
            style={{
              maxHeight: '400px',
              maxWidth: '100%',
            }}
          >
            <Editor
              value={code}
              onValueChange={(newCode) => setCode(newCode)}
              highlight={(code) =>
                Prism.highlight(code, Prism.languages.css, 'css')
              }
              padding={10}
              className="bg-white text-black font-mono text-sm rounded-lg border border-gray-300 focus:outline-none"
              style={{
                minHeight: '300px',
                overflowY: 'auto',
                overflowX: 'auto',
                fontFamily: 'monospace',
                fontSize: '14px',
                lineHeight: '1.5',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;