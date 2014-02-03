walk(document.body);

function walk(node) 
{
    // I stole this function from https://github.com/panicsteve/cloud-to-butt 
    // who stole it from http://is.gd/mwZp7E
    
    var child, next;
    
    switch ( node.nodeType )  
    {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
	child = node.firstChild;
	while ( child ) 
	{
	    next = child.nextSibling;
	    walk(child);
	    child = next;
	}
	break;
	
    case 3: // Text node
	handleText(node);
	break;
    }
}

function handleText(textNode) 
{
    var v = textNode.nodeValue;

    // NFL -> NeHL (debatable if NHL would suffice, but there's nothing wrong 
    // with the real NHL though...)
    v = v.replace(/\bNFL\b/g, "NHeL");
    v = v.replace(/\bNational Football League\b/g, "National Handegg League");


    // TODO this requires MUCH more advanced logic :-D
    v = v.replace(/\bFootball\b/g, "Handegg");
    v = v.replace(/\bAmerican Football\b/g, "Handegg");
    v = v.replace(/\bAmerican football\b/g, "Handegg");

    // soccer->football
    v = v.replace(/\bSoccer\b/g, "Football");
    v = v.replace(/\bsoccer\b/g, "football");
    
    //v = v.replace(/\bsoccer\b/g, "football");

	
    textNode.nodeValue = v;
}


