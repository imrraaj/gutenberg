import documentHasTextSelection from './document-has-text-selection';
import inputFieldHasUncollapsedSelection from './input-field-has-uncollapsed-selection';
import getDeepActiveElement from './get-deep-active-element';

/**
 * Check whether the current document has any sort of (uncollapsed) selection.
 * This includes ranges of text across elements and any selection inside
 * textual `<input>` and `<textarea>` elements.
 *
 * @param {Document} doc The document to check.
 *
 * @return {boolean} Whether there is any recognizable text selection in the document.
 */
export default function documentHasUncollapsedSelection( doc ) {
	// The focused field may live inside an open shadow root, in which case
	// `doc.activeElement` is only its host.
	const activeElement = getDeepActiveElement( doc );

	return (
		documentHasTextSelection( doc ) ||
		( !! activeElement &&
			inputFieldHasUncollapsedSelection( activeElement ) )
	);
}
