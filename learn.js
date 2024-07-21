let Slideindex = 1;
ShowSlides(Slideindex);

function PlusSlides (n){
    ShowSlides(Slideindex = n);
}

function CurrentSlide (n){
    ShowSlides(Slideindex = n);
}

function ShowSlides(n){
    let i;
    let Slides  = 
    document.getElementsByClassName
    ("SlideFade");

    let dot = 
    document.getElementsByClassName
    ("dot");

    if(n > Slides.length)
    {Slideindex = 1}

    if(n < 1)
    {Slideindex = Slides.length}

    for(i = 0; i < Slides.length; i++){
        Slides[i].style.display="none";
    }

    for(i = 0; i < dot.length; i++){
        dot[i].className=
        dot[i].className.replace("active"," ");
    }

    Slides[Slideindex-1].style.display="block";
    dot[Slideindex-1].className=" active";
}
