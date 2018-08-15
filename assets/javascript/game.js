$(document).ready(function () {
    var targetNum = rand120();
    var currentNum = 0;
    var c1 = rand12();
    var c2 = rand12();
    var c3 = rand12();
    var c4 = rand12();
    var wins = 0;
    var losses = 0;

    replaceValueById("target-number", targetNum);


    function rand120() {
        return Math.floor(Math.random() * 101) + 19;
    }

    function rand12() {
        return Math.floor(Math.random() * 12) + 1;
    }

    function replaceValueById(targetElementId, newVal) {
        $("#" + targetElementId).text(newVal);
    }

    function addToCurrentNum(crystalNumber) {
        currentNum += crystalNumber;
        $("#current-number").text(currentNum);
    }

    function resetGame(isWin) {
        targetNum = rand120();
        replaceValueById("target-number", targetNum);
        c1 = rand12();
        c2 = rand12();
        c3 = rand12();
        c4 = rand12();
        currentNum = 0;
        replaceValueById("current-count", currentNum);

        if (isWin) {
            wins++;
            replaceValueById("win", wins);
        }
        else {
            losses++;
            replaceValueById("loss", losses);
        }
    }

    $("#c1").click(function () {
        console.log("clicked c1");
        currentNum += c1;
        replaceValueById("current-count", currentNum);

        if (currentNum === targetNum)
            resetGame(true);
        if (currentNum > targetNum)
            resetGame(false);
    });

    $("#c2").click(function () {
        console.log("clicked c1");
        currentNum += c2;
        replaceValueById("current-count", currentNum);

        if (currentNum === targetNum)
            resetGame(true);
        if (currentNum > targetNum)
            resetGame(false);
    });

    $("#c3").click(function () {
        console.log("clicked c1");
        currentNum += c3;
        replaceValueById("current-count", currentNum);

        if (currentNum === targetNum)
            resetGame(true);
        if (currentNum > targetNum)
            resetGame(false);
    });

    $("#c4").click(function () {
        console.log("clicked c1");
        currentNum += c4;
        replaceValueById("current-count", currentNum);

        if (currentNum === targetNum)
            resetGame(true);
        if (currentNum > targetNum)
            resetGame(false);
    });
});

