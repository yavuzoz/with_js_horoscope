function zodiac() {
    let birthmonth = document.getElementById("month").value;
    let birthday = document.getElementById("day").value;
    let result = "unknown because you didn't put a valid date.";
  /*normalde ay gun ve result u var ile tanimlarim diye dusunuyordum, ama var kullanilmasin dendigi icin let kullandim. ki burada const kullanilamazdi*/
    if (birthmonth == 1 && birthday >= 20 || birthmonth == 2 && birthday <= 18
    ) {
        result = ("Aquarius");
        document.getElementById("photo").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-aquarius.png'width=20%>";
    }

    if (birthmonth == 2 && birthday >= 19 || birthmonth == 3 && birthday <= 20) {
        result = ("Pisces");
        document.getElementById("photo").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-pisces.png'width=20%>";
    }
    if (birthmonth == 3 && birthday >= 21 || birthmonth == 4 && birthday <= 20) {
        result = ("Aries");
        document.getElementById("photo").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-aries.png'width=20%>";
    }

    if (birthmonth == 4 && birthday >= 21 || birthmonth == 5 && birthday <= 20) {
        result = ("Taurus");
        document.getElementById("photo").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-taurus.png'width=20%>";
    }

    if (birthmonth == 5 && birthday >= 21 || birthmonth == 6 && birthday <= 20
    ) {
        result = ("Gemini");
        document.getElementById("photo").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-gemini.png'width=20%>";
    }

    if (birthmonth == 6 && birthday >= 21 || birthmonth == 7 && birthday <= 22) {
        result = ("Cancer");
        document.getElementById("photo").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-cancer.png'width=20%>";
    }
    if (birthmonth == 7 && birthday >= 23 || birthmonth == 8 && birthday <= 22) {
        result = ("Leo");
        document.getElementById("photo").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-leo.png'width=20%>";
    }
    if (birthmonth == 8 && birthday >= 23 || birthmonth == 9 && birthday <= 22) {
        result = ("Virgo");
        document.getElementById("photo").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-virgo.png'width=20%>";
    }
    if (birthmonth == 9 && birthday >= 23 || birthmonth == 10 && birthday <= 22) {
        result = ("Libra");
        document.getElementById("photo").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-libra.png'width=20%>";
    }
    if (birthmonth == 10 && birthday >= 23 || birthmonth == 11 && birthday <= 21) {
        result = ("Scorpio");
        document.getElementById("photo").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-scorpio.png'width=20%>";
    }
    if (birthmonth == 11 && birthday >= 22 || birthmonth == 12 && birthday <= 21) {
        result = ("Sagittarius");
        document.getElementById("photo").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-sagittarius.png'width=20%>";
    }
    if (birthmonth == 12 && birthday >= 22 || birthmonth == 1 && birthday <= 19) {
        result = ("Capricorn");
        document.getElementById("photo").innerHTML = "<img src='https://www.horoscope.com/images-US/signs/profile-capricorn.png'width=20%>";

    } else if (birthmonth > 12 || birthday > 31) {
        alert("Please enter an accurate date ! ");
    }
    console.log(result);
}

