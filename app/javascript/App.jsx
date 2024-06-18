import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';

import { RichTextEditor, Link } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import Placeholder from '@tiptap/extension-placeholder';
import { Box, MantineProvider } from "@mantine/core";
import Collaboration from '@tiptap/extension-collaboration'
import { CollaborationCursor } from "@tiptap/extension-collaboration-cursor";
import { createConsumer } from "@rails/actioncable"
import { WebsocketProvider } from "@y-rb/actioncable";
import * as Y from 'yjs'

const consumer = createConsumer();

const doc = new Y.Doc()

const provider = new WebsocketProvider(
    doc,
    consumer,
    "SyncChannel",
    {
        id: 1
    }
);

function getRandomColor() {
    const colors = ["#ff901f", "#ff2975", "#f222ff", "#8c1eff"];

    const selectedIndex = Math.floor(Math.random() * (colors.length - 1));
    return colors[selectedIndex];
}

function Demo() {

    const editor = useEditor({
        extensions: [
            StarterKit.configure({ history: false }),
            Underline,
            Link,
            Superscript,
            SubScript,
            Highlight,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
            Placeholder.configure({ placeholder: 'This is placeholder' }),
            Collaboration.configure({
                document: doc // Configure Y.Doc for collaboration
            }),
            CollaborationCursor.configure({
                provider,
                user: {
                    name: "Vikas",
                    color: getRandomColor()
                }
            })
        ]
    });

    return (
        <Box pos={"relative"}>
            <RichTextEditor editor={editor}>
                <RichTextEditor.Toolbar sticky stickyOffset={60}>
                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.Bold />
                        <RichTextEditor.Italic />
                        <RichTextEditor.Underline />
                        <RichTextEditor.Strikethrough />
                        <RichTextEditor.ClearFormatting />
                        <RichTextEditor.Highlight />
                        <RichTextEditor.Code />
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.H1 />
                        <RichTextEditor.H2 />
                        <RichTextEditor.H3 />
                        <RichTextEditor.H4 />
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.Blockquote />
                        <RichTextEditor.Hr />
                        <RichTextEditor.BulletList />
                        <RichTextEditor.OrderedList />
                        <RichTextEditor.Subscript />
                        <RichTextEditor.Superscript />
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.Link />
                        <RichTextEditor.Unlink />
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.AlignLeft />
                        <RichTextEditor.AlignCenter />
                        <RichTextEditor.AlignJustify />
                        <RichTextEditor.AlignRight />
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.Undo />
                        <RichTextEditor.Redo />
                    </RichTextEditor.ControlsGroup>
                </RichTextEditor.Toolbar>

                <RichTextEditor.Content style={{marginTop: '50px'}} />
            </RichTextEditor>
        </Box>
    );
}

const App = () => {
    return <MantineProvider><Demo /></MantineProvider>
}


document.addEventListener("DOMContentLoaded", () => {
    const root = createRoot(
        document.body.appendChild(document.createElement("div"))
    );
    root.render(<App />);
});

export default App;
