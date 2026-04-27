function swapImage(smallerImg) {
    // alert(smallerImg.src)
    var biggerimg = document.getElementById("biggerimg");
    // alert(biggerimg)
    var temp = smallerImg.src;
    smallerImg.src = biggerimg.src
    biggerimg.src = temp;
}