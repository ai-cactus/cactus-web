import { useState, useEffect, useRef, useMemo } from 'react';
import { CKEditor, useCKEditorCloud } from '@ckeditor/ckeditor5-react';

import './App.css';

const LICENSE_KEY =
	'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3MzkyMzE5OTksImp0aSI6ImJjM2YxMTI3LWUwY2ItNDMxMi1hZjQ0LWY5Y2QzN2Y3ODdhNCIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6IjJiNmRhM2U0In0.7xqW0mV6LPffmcTVnHhtjJmPQMMEhSxJ5R7hgE6px3YGoAN64mqG62LRy5DpqxoMkJKM-ZXZdPkMd8Bm65bcIQ';

const CLOUD_SERVICES_TOKEN_URL =
	'https://rdi5d60iolou.cke-cs.com/token/dev/8fb647f135128dc3f15dc3084e05d6bb32e38b49c46d8aa9ef1e6794c62a?limit=10';

export default function App() {
	const editorContainerRef = useRef(null);
	const editorMenuBarRef = useRef(null);
	const editorToolbarRef = useRef(null);
	const editorOutlineRef = useRef(null);
	const editorRef = useRef(null);
	const editorMinimapRef = useRef(null);
	const [isLayoutReady, setIsLayoutReady] = useState(false);
	const cloud = useCKEditorCloud({ version: '44.1.0', premium: true, ckbox: { version: '2.6.1' } });

	useEffect(() => {
		setIsLayoutReady(true);

		return () => setIsLayoutReady(false);
	}, []);

	const { DecoupledEditor, editorConfig } = useMemo(() => {
		if (cloud.status !== 'success' || !isLayoutReady) {
			return {};
		}

		const {
			DecoupledEditor,
			Plugin,
			ButtonView,
			Alignment,
			AutoImage,
			AutoLink,
			Autosave,
			BalloonToolbar,
			Bold,
			CKBox,
			CKBoxImageEdit,
			CloudServices,
			Code,
			Essentials,
			FontBackgroundColor,
			FontColor,
			FontFamily,
			FontSize,
			Heading,
			HorizontalLine,
			ImageBlock,
			ImageCaption,
			ImageInline,
			ImageInsert,
			ImageInsertViaUrl,
			ImageResize,
			ImageStyle,
			ImageTextAlternative,
			ImageToolbar,
			ImageUpload,
			Indent,
			IndentBlock,
			Italic,
			Link,
			LinkImage,
			List,
			ListProperties,
			Minimap,
			PageBreak,
			Paragraph,
			PasteFromOffice,
			PictureEditing,
			RemoveFormat,
			SpecialCharacters,
			Strikethrough,
			Subscript,
			Superscript,
			Table,
			TableCaption,
			TableCellProperties,
			TableColumnResize,
			TableProperties,
			TableToolbar,
			TodoList,
			Underline
		} = cloud.CKEditor;
		const { DocumentOutline, ExportPdf, ExportWord, ImportWord, MultiLevelList, TableOfContents } = cloud.CKEditorPremiumFeatures;

		/**
		 * The `DocumentOutlineToggler` plugin adds an icon to the left side of the editor.
		 *
		 * It allows to toggle document outline visibility.
		 */
		class DocumentOutlineToggler extends Plugin {
			static get pluginName() {
				return 'DocumentOutlineToggler';
			}

			init() {
				this.toggleButton = new ButtonView(this.editor.locale);

				const DOCUMENT_OUTLINE_ICON =
					'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 9.5a.5.5 0 0 0 .5-.5v-.5A.5.5 0 0 0 5 8H3.5a.5.5 0 0 0-.5.5V9a.5.5 0 0 0 .5.5H5Z"/><path d="M5.5 12a.5.5 0 0 1-.5.5H3.5A.5.5 0 0 1 3 12v-.5a.5.5 0 0 1 .5-.5H5a.5.5 0 0 1 .5.5v.5Z"/><path d="M5 6.5a.5.5 0 0 0 .5-.5v-.5A.5.5 0 0 0 5 5H3.5a.5.5 0 0 0-.5.5V6a.5.5 0 0 0 .5.5H5Z"/><path clip-rule="evenodd" d="M2 19a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2Zm6-1.5h10a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H8v15Zm-1.5-15H2a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 .5.5h4.5v-15Z"/></svg>';
				const COLLAPSE_OUTLINE_ICON =
					'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>';

				const documentOutlineContainer = this.editor.config.get('documentOutline.container');
				const sidebarContainer = documentOutlineContainer.parentElement;

				this.toggleButton.set({
					label: 'Toggle document outline',
					tooltip: 'Hide document outline',
					tooltipPosition: 'se',
					icon: COLLAPSE_OUTLINE_ICON
				});

				this.toggleButton.on('execute', () => {
					// Toggle a CSS class on the document outline container to manage the visibility of the outline.
					documentOutlineContainer.classList.toggle('ck-hidden');

					// Change the look of the button to reflect the state of the document outline feature.
					if (documentOutlineContainer.classList.contains('ck-hidden')) {
						this.toggleButton.icon = DOCUMENT_OUTLINE_ICON;
						this.toggleButton.tooltip = 'Show document outline';
					} else {
						this.toggleButton.icon = COLLAPSE_OUTLINE_ICON;
						this.toggleButton.tooltip = 'Hide document outline';
					}

					// Keep the focus in the editor whenever the button is clicked.
					this.editor.editing.view.focus();
				});

				this.toggleButton.render();

				sidebarContainer.insertBefore(this.toggleButton.element, documentOutlineContainer);
			}

			destroy() {
				this.toggleButton.element.remove();

				return super.destroy();
			}
		}

		return {
			DecoupledEditor,
			editorConfig: {
				toolbar: {
					items: [
						'heading',
						'|',
						'fontSize',
						'fontFamily',
						'fontColor',
						'fontBackgroundColor',
						'|',
						'bold',
						'italic',
						'underline',
						'|',
						'link',
						'insertImage',
						'insertTable',
						'|',
						'alignment',
						'|',
						'bulletedList',
						'numberedList',
						'multiLevelList',
						'todoList',
						'outdent',
						'indent'
					],
					shouldNotGroupWhenFull: false
				},
				plugins: [
					Alignment,
					AutoImage,
					AutoLink,
					Autosave,
					BalloonToolbar,
					Bold,
					CKBox,
					CKBoxImageEdit,
					CloudServices,
					Code,
					DocumentOutline,
					Essentials,
					ExportPdf,
					ExportWord,
					FontBackgroundColor,
					FontColor,
					FontFamily,
					FontSize,
					Heading,
					HorizontalLine,
					ImageBlock,
					ImageCaption,
					ImageInline,
					ImageInsert,
					ImageInsertViaUrl,
					ImageResize,
					ImageStyle,
					ImageTextAlternative,
					ImageToolbar,
					ImageUpload,
					ImportWord,
					Indent,
					IndentBlock,
					Italic,
					Link,
					LinkImage,
					List,
					ListProperties,
					Minimap,
					MultiLevelList,
					PageBreak,
					Paragraph,
					PasteFromOffice,
					PictureEditing,
					RemoveFormat,
					SpecialCharacters,
					Strikethrough,
					Subscript,
					Superscript,
					Table,
					TableCaption,
					TableCellProperties,
					TableColumnResize,
					TableOfContents,
					TableProperties,
					TableToolbar,
					TodoList,
					Underline
				],
				extraPlugins: [DocumentOutlineToggler],
				balloonToolbar: ['bold', 'italic', '|', 'link', 'insertImage', '|', 'bulletedList', 'numberedList'],
				cloudServices: {
					tokenUrl: CLOUD_SERVICES_TOKEN_URL
				},
				documentOutline: {
					container: editorOutlineRef.current
				},
				exportPdf: {
					stylesheets: [
						/* This path should point to application stylesheets. */
						/* See: https://ckeditor.com/docs/ckeditor5/latest/features/converters/export-pdf.html */
						'./App.css',
						/* Export PDF needs access to stylesheets that style the content. */
						'https://cdn.ckeditor.com/ckeditor5/44.1.0/ckeditor5.css',
						'https://cdn.ckeditor.com/ckeditor5-premium-features/44.1.0/ckeditor5-premium-features.css'
					],
					fileName: 'export-pdf-demo.pdf',
					converterOptions: {
						format: 'A4',
						margin_top: '20mm',
						margin_bottom: '20mm',
						margin_right: '12mm',
						margin_left: '12mm',
						page_orientation: 'portrait'
					}
				},
				exportWord: {
					stylesheets: [
						/* This path should point to application stylesheets. */
						/* See: https://ckeditor.com/docs/ckeditor5/latest/features/converters/export-word.html */
						'./App.css',
						/* Export Word needs access to stylesheets that style the content. */
						'https://cdn.ckeditor.com/ckeditor5/44.1.0/ckeditor5.css',
						'https://cdn.ckeditor.com/ckeditor5-premium-features/44.1.0/ckeditor5-premium-features.css'
					],
					fileName: 'export-word-demo.docx',
					converterOptions: {
						document: {
							orientation: 'portrait',
							size: 'A4',
							margins: {
								top: '20mm',
								bottom: '20mm',
								right: '12mm',
								left: '12mm'
							}
						}
					}
				},
				fontFamily: {
					supportAllValues: true
				},
				fontSize: {
					options: [10, 12, 14, 'default', 18, 20, 22],
					supportAllValues: true
				},
				heading: {
					options: [
						{
							model: 'paragraph',
							title: 'Paragraph',
							class: 'ck-heading_paragraph'
						},
						{
							model: 'heading1',
							view: 'h1',
							title: 'Heading 1',
							class: 'ck-heading_heading1'
						},
						{
							model: 'heading2',
							view: 'h2',
							title: 'Heading 2',
							class: 'ck-heading_heading2'
						},
						{
							model: 'heading3',
							view: 'h3',
							title: 'Heading 3',
							class: 'ck-heading_heading3'
						},
						{
							model: 'heading4',
							view: 'h4',
							title: 'Heading 4',
							class: 'ck-heading_heading4'
						},
						{
							model: 'heading5',
							view: 'h5',
							title: 'Heading 5',
							class: 'ck-heading_heading5'
						},
						{
							model: 'heading6',
							view: 'h6',
							title: 'Heading 6',
							class: 'ck-heading_heading6'
						}
					]
				},
				image: {
					toolbar: [
						'toggleImageCaption',
						'imageTextAlternative',
						'|',
						'imageStyle:inline',
						'imageStyle:wrapText',
						'imageStyle:breakText',
						'|',
						'resizeImage',
						'|',
						'ckboxImageEdit'
					]
				},
				initialData:
					'<h2>Congratulations on setting up CKEditor 5! 🎉</h2>\n<p>\n\tYou\'ve successfully created a CKEditor 5 project. This powerful text editor\n\twill enhance your application, enabling rich text editing capabilities that\n\tare customizable and easy to use.\n</p>\n<h3>What\'s next?</h3>\n<ol>\n\t<li>\n\t\t<strong>Integrate into your app</strong>: time to bring the editing into\n\t\tyour application. Take the code you created and add to your application.\n\t</li>\n\t<li>\n\t\t<strong>Explore features:</strong> Experiment with different plugins and\n\t\ttoolbar options to discover what works best for your needs.\n\t</li>\n\t<li>\n\t\t<strong>Customize your editor:</strong> Tailor the editor\'s\n\t\tconfiguration to match your application\'s style and requirements. Or\n\t\teven write your plugin!\n\t</li>\n</ol>\n<p>\n\tKeep experimenting, and don\'t hesitate to push the boundaries of what you\n\tcan achieve with CKEditor 5. Your feedback is invaluable to us as we strive\n\tto improve and evolve. Happy editing!\n</p>\n<h3>Helpful resources</h3>\n<ul>\n\t<li>📝 <a href="https://portal.ckeditor.com/checkout?plan=free">Trial sign up</a>,</li>\n\t<li>📕 <a href="https://ckeditor.com/docs/ckeditor5/latest/installation/index.html">Documentation</a>,</li>\n\t<li>⭐️ <a href="https://github.com/ckeditor/ckeditor5">GitHub</a> (star us if you can!),</li>\n\t<li>🏠 <a href="https://ckeditor.com">CKEditor Homepage</a>,</li>\n\t<li>🧑‍💻 <a href="https://ckeditor.com/ckeditor-5/demo/">CKEditor 5 Demos</a>,</li>\n</ul>\n<h3>Need help?</h3>\n<p>\n\tSee this text, but the editor is not starting up? Check the browser\'s\n\tconsole for clues and guidance. It may be related to an incorrect license\n\tkey if you use premium features or another feature-related requirement. If\n\tyou cannot make it work, file a GitHub issue, and we will help as soon as\n\tpossible!\n</p>\n',
				licenseKey: LICENSE_KEY,
				link: {
					addTargetToExternalLinks: true,
					defaultProtocol: 'https://',
					decorators: {
						toggleDownloadable: {
							mode: 'manual',
							label: 'Downloadable',
							attributes: {
								download: 'file'
							}
						}
					}
				},
				list: {
					properties: {
						styles: true,
						startIndex: true,
						reversed: true
					}
				},
				menuBar: {
					isVisible: true
				},
				minimap: {
					container: editorMinimapRef.current,
					extraClasses: 'editor-container_include-minimap ck-minimap__iframe-content'
				},
				placeholder: 'Type or paste your content here!',
				table: {
					contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
				}
			}
		};
	}, [cloud, isLayoutReady]);

	useEffect(() => {
		if (editorConfig) {
			configUpdateAlert(editorConfig);
		}
	}, [editorConfig]);

	return (
		<div className="main-container">
			<div
				className="editor-container editor-container_document-editor editor-container_include-outline editor-container_include-minimap"
				ref={editorContainerRef}
			>
				<div className="editor-container__menu-bar" ref={editorMenuBarRef}></div>
				<div className="editor-container__toolbar" ref={editorToolbarRef}></div>
				<div className="editor-container__minimap-wrapper">
					<div className="editor-container__editor-wrapper">
						<div className="editor-container__sidebar">
							<div ref={editorOutlineRef}></div>
						</div>
						<div className="editor-container__editor">
							<div ref={editorRef}>
								{DecoupledEditor && editorConfig && (
									<CKEditor
										onReady={editor => {
											editorToolbarRef.current.appendChild(editor.ui.view.toolbar.element);
											editorMenuBarRef.current.appendChild(editor.ui.view.menuBarView.element);
										}}
										onAfterDestroy={() => {
											Array.from(editorToolbarRef.current.children).forEach(child => child.remove());
											Array.from(editorMenuBarRef.current.children).forEach(child => child.remove());
										}}
										editor={DecoupledEditor}
										config={editorConfig}
									/>
								)}
							</div>
						</div>
					</div>
					<div className="editor-container__sidebar editor-container__sidebar_minimap">
						<div ref={editorMinimapRef}></div>
					</div>
				</div>
			</div>
		</div>
	);
}

/**
 * This function exists to remind you to update the config needed for premium features.
 * The function can be safely removed. Make sure to also remove call to this function when doing so.
 */
function configUpdateAlert(config) {
	if (configUpdateAlert.configUpdateAlertShown) {
		return;
	}

	const isModifiedByUser = (currentValue, forbiddenValue) => {
		if (currentValue === forbiddenValue) {
			return false;
		}

		if (currentValue === undefined) {
			return false;
		}

		return true;
	};

	const valuesToUpdate = [];

	configUpdateAlert.configUpdateAlertShown = true;

	if (!isModifiedByUser(config.licenseKey, '<YOUR_LICENSE_KEY>')) {
		valuesToUpdate.push('LICENSE_KEY');
	}

	if (!isModifiedByUser(config.cloudServices?.tokenUrl, '<YOUR_CLOUD_SERVICES_TOKEN_URL>')) {
		valuesToUpdate.push('CLOUD_SERVICES_TOKEN_URL');
	}

	if (valuesToUpdate.length) {
		window.alert(
			[
				'Please update the following values in your editor config',
				'to receive full access to Premium Features:',
				'',
				...valuesToUpdate.map(value => ` - ${value}`)
			].join('\n')
		);
	}
}
