console.log("Ty, który wchodzisz, żegnaj się z nadzieją.")





{
    const changeBackground = () => {
        const button = document.querySelector(".button");
        const body = document.querySelector(".body");

        button.addEventListener("click", () => {
            if (button.innerText === "Włącz tryb nocny") {
                button.innerText = "Włącz tryb dzienny";
            } else {
                (button.innerText === "Włącz tryb dzienny");
                button.innerText = "Włącz tryb nocny"
            };
        });

        button.addEventListener("click", () => {
            body.classList.toggle("darkTheme")
        });
    }

    changeBackground();
}

{
    const checkResult = () => {

        const answerField1 = document.querySelector(".section__tableCell--1");
        const answerField2 = document.querySelector(".section__tableCell--2");
        const answerField3 = document.querySelector(".section__tableCell--3");
        const answerField4 = document.querySelector(".section__tableCell--4");
        const answerField5 = document.querySelector(".section__tableCell--5");
        const answerField6 = document.querySelector(".section__tableCell--6");
        const button1 = document.querySelector(".section__button");
        const result = document.querySelector(".result");

        button1.addEventListener("click", () => {
            if (answerField1.innerText === "X") {
                answerField1.classList.toggle("rightAnswer");
            } else if (answerField2.innerText === "X") {
                answerField2.classList.toggle("wrongAnswer");
            };

            if (answerField3.innerText === "X") {
                answerField3.classList.toggle("wrongAnswer");
            } else if (answerField4.innerText === "X") {
                answerField4.classList.toggle("rightAnswer");
            };

            if (answerField5.innerText === "X") {
                answerField5.classList.toggle("rightAnswer");
            } else if (answerField6.innerText === "X") {
                answerField6.classList.toggle("wrongAnswer");
            };

            if (answerField1.innerText === "X" && answerField4.innerText === "X" && answerField5.innerText === "X") {
                result.innerText = ("Brawo! Wszystkie odpowiedzi są poprawne!")
            } else if (answerField2.innerText === "X" && answerField3.innerText === "X" && answerField6.innerText === "X") {
                result.innerText = ("Niestety wszystkie odpowiedzi są błędne, ale głowa do góry! Przynajmniej interakcja działa.");
            };

            if (answerField1.innerText === "X" && answerField4.innerText === "X" && answerField6.innerText === "X" || answerField2.innerText === "X" && answerField4.innerText === "X" && answerField5.innerText === "X" || answerField1.innerText === "X" && answerField3.innerText === "X" && answerField5.innerText === "X") {
                result.innerText = ("Prawie wszystkie odpowiedzi są poprawne. Drobna pomyłka nie ma znaczenia ;).");
            } else if (answerField2.innerText === "X" && answerField3.innerText === "X" && answerField5.innerText === "X" || answerField2.innerText === "X" && answerField3.innerText === "X" && answerField6.innerText === "X" || answerField2.innerText === "X" && answerField4.innerText === "X" && answerField6.innerText === "X") {
                result.innerText = ("NIestety, tylko jedna odpowiedź jest prawidłowa, ale honorowy punkcik jest!");
            };
        })

        button1.addEventListener("click", () => {
            if (button1.innerText === "Kliknij by sprawdzić wynik") {
                button1.innerText = "Wymaż wyniki";
            } else {
                (button1.innerText === "Wymaż wyniki");
                button1.innerText = "Kliknij by sprawdzić wynik"
            }
        });
    }

    checkResult();
}