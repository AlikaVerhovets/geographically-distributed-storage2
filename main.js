const northAmericaCoordinates = // Denver
{
    users: {
        left: '16%',
        top: '42%'
    },
    laptop: {
        left: '15%',
        top: '32%'
    },
    smartphone: {
        left: '19%',
        top: '39%'
    },
    phone: {
        left: '23.5%',
        top: '30%'
    },
    regionName: 'northAmericaCoordinates',
    regionNameDraw: 'North America',
    coordinates: {
        left: 16,
        top: 42
    },
    latency: {
        'eastUsaServer': {
            time: 40.942 // LA
        },
        'westUsaServer': {
            time: 43.731 // NY
        },
        'germanyServer': {
            time: 126.678 //Frankfurt
        },
        'singaporeServer': {
            time: 209.589 // Singapore
        }

    }
}

const southAmericaCoordinates = { //Brasilia
    users: {
        left: '28%',
        top: '75%'
    },
    laptop: {
        left: '27%',
        top: '62%'
    },
    smartphone: {
        left: '32%',
        top: '67.5%'
    },
    phone: {
        left: '29%',
        top: '69.5%'
    },
    regionName: 'southAmericaCoordinates',
    regionNameDraw: 'South America',
    coordinates: {
        left: 28,
        top: 75
    },
    latency: {
        'eastUsaServer': {
            time: 105.974 // LA
        },
        'westUsaServer': {
            time: 77.859 // NY
        },
        'germanyServer': {
            time: 190.402 //Frankfurt
        },
        'singaporeServer': {
            time: 395.374 // Singapore
        }

    }
}

const europeCoordinates = { //Prague
    users: {
        left: '48%',
        top: '37%'
    },
    laptop: {
        left: '43.5%',
        top: '36%'
    },
    smartphone: {
        left: '51.5%',
        top: '32%'
    },
    phone: {
        left: '58%',
        top: '24%'
    },
    regionName: 'europeCoordinates',
    regionNameDraw: 'Europe',
    coordinates: {
        left: 48,
        top: 37
    },
    latency: {
        'eastUsaServer': {
            time: 131.358 // LA
        },
        'westUsaServer': {
            time: 99.575 // NY
        },
        'germanyServer': {
            time: 13.955 //Frankfurt
        },
        'singaporeServer': {
            time: 172.894 // Singapore
        }

    }
}

const asiaCoordinates = { //Seoul
    users: {
        left: '72%',
        top: '46%'
    },
    laptop: {
        left: '67.5%',
        top: '45%'
    },
    smartphone: {
        left: '76.5%',
        top: '44%'
    },
    phone: {
        left: '80.5%',
        top: '30%'
    },
    regionName: 'asiaCoordinates',
    regionNameDraw: 'Asia',
    coordinates: {
        left: 72,
        top: 46
    },
    latency: {
        'eastUsaServer': {
            time: 230.235 // LA
        },
        'westUsaServer': {
            time: 201.618 // NY
        },
        'germanyServer': {
            time: 120.192 //Frankfurt
        },
        'singaporeServer': {
            time: 49.256 // Singapore
        }

    }
}

const oceaniaCoordinates = { //Sydney
    users: {
        left: '81%',
        top: '82%'
    },
    laptop: {
        left: '79%',
        top: '75%'
    },
    smartphone: {
        left: '83%',
        top: '77%'
    },
    phone: {
        left: '87%',
        top: '73.5%'
    },
    regionName: 'oceaniaCoordinates',
    regionNameDraw: 'Oceania',
    coordinates: {
        left: 80,
        top: 83
    },
    latency: {
        'eastUsaServer': {
            time: 179.583 // LA
        },
        'westUsaServer': {
            time: 207.851 // NY
        },
        'germanyServer': {
            time: 130.543 //Frankfurt
        },
        'singaporeServer': {
            time: 32.502 // Singapore
        }

    }
}

const eastUsaServer = {
    location: {
        left: '13%',
        top: '42%'
    },
    regionName: 'eastUsaServer',
    lineStart: {
        x: 14,
        y: 43
    },
    coordinates: {
        left: 13,
        top: 42
    }
}

const westUsaServer = {
    location: {
        left: '30%',
        top: '36%'
    },
    regionName: 'westUsaServer',
    lineStart: {
        x: 28,
        y: 42
    },
    coordinates: {
        left: 27,
        top: 41
    }
}

const germanyServer = {
    location: {
        left: '48.5%',
        top: '32%'
    },
    regionName: 'germanyServer',
    lineStart: {
        x: 49,
        y: 38
    },
    coordinates: {
        left: 48,
        top: 37
    }
}

const singaporeServer = {
    location: {
        left: '77.5%',
        top: '64%'
    },
    regionName: 'singaporeServer',
    lineStart: {
        x: 76,
        y: 66
    },
    coordinates: {
        left: 75,
        top: 65
    }
}

// Сюди записуються результати вибору по регіонах
var userChoices = {};

// результати вибору серверів
var serverChoices = {};

// допоміжний об'єкт для переходу від одного кроку до іншого
var steps = {};

// використовується для відмальовування результатів на етапі мапи
var firstResults = {
    lineStart: {}
};

// використовуться для відмальовування результатів на етапі списку (cloud)
var byteCloudResults = {};

// використовуться для відмальовування результатів на етапі списку (object storage)
var objectStorageResult = {};

let Element = function(x, y) {
    this.x = x;
    this.y = y;
}

Element.prototype.drawLaptop = function(name) {
    let laptopHtml = `
    <div class="tech__laptop ${name}">
        <img src="imgs/small.png" alt="">
    </div>`;
    $('.map').append(laptopHtml);
    $('.tech__laptop').last().css({
        left: this.x,
        top: this.y
    });
}

Element.prototype.drawSmartphone = function(name) {
    let smartphoneHtml = `
    <div class="tech__smartphone ${name}">
        <img src="imgs/medium.png" alt="">
    </div>`;
    $('.map').append(smartphoneHtml);
    $('.tech__smartphone').last().css({
        left: this.x,
        top: this.y
    });
}

Element.prototype.drawPhone = function(name) {
    let phoneHtml = `
    <div class="tech__phone ${name}">
        <img src="imgs/large.png" alt="">
    </div>`;
    $('.map').append(phoneHtml);
    $('.tech__phone').last().css({
        left: this.x,
        top: this.y
    });
}

Element.prototype.drawServer = function(region) {
    let serverHtml = `
    <div class="my__data__region ${region}">
        <img src="imgs/server.png" alt="">
    </div>`;
    $('.map').append(serverHtml);
    $('.my__data__region').last().css({
        left: this.x,
        top: `calc(${this.y} - 20px)`
    });
}

Element.prototype.drawCloudServer = function(region) {
    let cloudServerHtml = `
    <div class="additional__data__region ${region}">
        <img src="imgs/server_ByteCloud.png" alt="">
    </div>`;
    $('.map').append(cloudServerHtml);
    $('.additional__data__region').last().css({
        left: this.x,
        top: `calc(${this.y} - 20px)`
    });
}

// Визначаю відстань між двома точками
function euclideanDistance(x1, y1, x2, y2) {
    const xDistance = x2 - x1;
    const yDistance = y2 - y1;
  
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

// Шукаємо найблтжчий сервер
function getNearestServer(userCoordinates, serverList) {
    let nearestServer = null;
    let nearestDistance = Infinity;
    let latency = Infinity;
    let lineStartX;
    let lineStartY;

    for (const server of serverList) {

        if (!firstResults['mainServer']) {
            firstResults['mainServer'] = {};
            firstResults.mainServer['lineStart'] = {};
            firstResults.mainServer.name = server;
            firstResults.mainServer.latency = userCoordinates.latency[server.regionName].time;
            firstResults.mainServer.lineStart.x = server.lineStart.x;
            firstResults.mainServer.lineStart.y = server.lineStart.y;
        }
        const distance = euclideanDistance(
        userCoordinates.coordinates.left,
        userCoordinates.coordinates.top,
        server.coordinates.left,
        server.coordinates.top
        );

        const latencyTime = userCoordinates.latency[server.regionName].time;

        const lineCoordinateX = server.lineStart.x;
        const lineCoordinateY = server.lineStart.y;

        if (distance < nearestDistance) {
        nearestServer = server;
        nearestDistance = distance;
        latency = latencyTime;
        lineStartX = lineCoordinateX;
        lineStartY = lineCoordinateY;
        }
    }

    firstResults.nesrestServer = nearestServer;
    firstResults.latency = latency;
    firstResults.lineStart.x = lineStartX;
    firstResults.lineStart.y = lineStartY;

    return firstResults;
}

// стираємо лінії та анімації пристроїв
function clearCanvas () {
    setTimeout(() => {
    $('.st0').css('opacity','0');
    $('.st0').css('opacity','0');
    $('.tech__laptop--overlay').remove();
    $('.tech__smartphone--overlay').remove();
    $('.tech__phone--overlay').remove();
    }, 3000);
    
}

Element.prototype.drawTextBox = function(region) {
    let TextBoxHtml = `
    <div class="text__box ${region}">
        <p class="text__info"></p>
    </div>`;
    $('.map').append(TextBoxHtml);
    $('.text__box').last().css({
        left: this.x,
        top: `calc(${this.y} - 20px)`
    });
}

// функція, яка перебирає по черзі усі обрані регіони з масиву 
// та визначає для кожного найближчий сервер, промальовує лінії до юзерів, 
// виводить результати Latency і Time, а також сортує фінальний масив за кількістю юзерів
function connectRegionToServer (userList, serverList, callback) {
    let count = 0;

    for (const user of userList) {
        getNearestServer(user, serverList);
        let usersCount = user.usersAmount;
        let latency = firstResults.latency;
        let time = latency*10;
        let addClass = user.name;
        let userLeft = user.coordinates.left;
        let userTop = user.coordinates.top-15;
        let regionNameDraw = user.nameDraw;
        let serverClass = firstResults.nesrestServer.regionName;

        if (usersCount == 1) {
            $(`.blue.${serverClass}.${addClass}.laptop.st0`).css('opacity','1');
            
            $(`.tech__laptop.${addClass}`).append('<div class="tech__laptop--overlay"></div>');
            $(`.${addClass} .tech__laptop--overlay`).css({
            'content': "''",
            'position': 'absolute',
            'z-index': '2',
            'top': '16.5%',
            'left': '16%',
            'width': '48%',
            'height': '38%',
            'background': 'linear-gradient(to right, #4CA8F9 50%, transparent 50%)',
            'background-size': '200% 100%',
            'background-position': 'left',
            'animation': `slide ${time}ms linear forwards`,
            'transform': 'skewY(-31deg)'
            });              
        } else if (usersCount == 2) {
            $(`.blue.${serverClass}.${addClass}.laptop.st0`).css('opacity','1');
            $(`.blue.${serverClass}.${addClass}.smartphone.st0`).css('opacity','1');

            $(`.tech__laptop.${addClass}`).append('<div class="tech__laptop--overlay"></div>');
            $(`.${addClass} .tech__laptop--overlay`).css({
            'content': "''",
            'position': 'absolute',
            'z-index': '2',
            'top': '16.5%',
            'left': '16%',
            'width': '48%',
            'height': '38%',
            'background': 'linear-gradient(to right, #4CA8F9 50%, transparent 50%)',
            'background-size': '200% 100%',
            'background-position': 'left',
            'animation': `slide ${time}ms linear forwards`,
            'transform': 'skewY(-31deg)'
            });

            $(`.tech__smartphone.${addClass}`).append('<div class="tech__smartphone--overlay"></div>');
            $(`.${addClass} .tech__smartphone--overlay`).css({
            'content': "''",
            'position': 'absolute',
            'z-index': '2',
            'top': '-9%',
            'left': '33.5%',
            'width': '31%',
            'height': '104%',
            'border-radius': '11%',
            'background': 'linear-gradient(to right, #4CA8F9 50%, transparent 50%)',
            'background-size': '200% 100%',
            'background-position': 'left',
            'animation': `slide ${time}ms linear forwards`,
            'transform': 'rotate(-60deg) skewY(30deg)'
            });  
        } else if (usersCount == 3) {
            $(`.blue.${serverClass}.${addClass}.laptop.st0`).css('opacity','1');
            $(`.blue.${serverClass}.${addClass}.smartphone.st0`).css('opacity','1');
            $(`.blue.${serverClass}.${addClass}.phone.st0`).css('opacity','1');

            $(`.tech__laptop.${addClass}`).append('<div class="tech__laptop--overlay"></div>');
            $(`.${addClass} .tech__laptop--overlay`).css({
            'content': "''",
            'position': 'absolute',
            'z-index': '2',
            'top': '16.5%',
            'left': '16%',
            'width': '48%',
            'height': '38%',
            'background': 'linear-gradient(to right, #4CA8F9 50%, transparent 50%)',
            'background-size': '200% 100%',
            'background-position': 'left',
            'animation': `slide ${time}ms linear forwards`,
            'transform': 'skewY(-31deg)'
            });

            $(`.tech__smartphone.${addClass}`).append('<div class="tech__smartphone--overlay"></div>');
            $(`.${addClass} .tech__smartphone--overlay`).css({
            'content': "''",
            'position': 'absolute',
            'z-index': '2',
            'top': '-9%',
            'left': '33.5%',
            'width': '31%',
            'height': '104%',
            'border-radius': '11%',
            'background': 'linear-gradient(to right, #4CA8F9 50%, transparent 50%)',
            'background-size': '200% 100%',
            'background-position': 'left',
            'animation': `slide ${time}ms linear forwards`,
            'transform': 'rotate(-60deg) skewY(30deg)'
            });

            $(`.tech__phone.${addClass}`).append('<div class="tech__phone--overlay"></div>');
            $(`.${addClass} .tech__phone--overlay`).css({
            'content': "''",
            'position': 'absolute',
            'z-index': '2',
            'top': '17.5%',
            'left': '14%',
            'width': '83%',
            'height': '38%',
            'border-radius': '6%',
            'background': 'linear-gradient(to right, #4CA8F9 50%, transparent 50%)',
            'background-size': '200% 100%',
            'background-position': 'left',
            'animation': `slide ${time}ms linear forwards`,
            'transform': 'skewY(-30deg)'
            });
        }

        new Element (userLeft+'%', userTop+'%').drawTextBox(addClass);
        $(`.${addClass} .text__info`).html(`Latency: ${Math.trunc(latency)}`)
        setTimeout(() => {
            $(`.${addClass} .text__info`).html(`Time: ${Math.trunc(time/23)} sec`);
            count++;
            if (count === userList.length) {
                callback();
            }
        }, time);

        if (!Array.isArray(byteCloudResults.regions)) {
            byteCloudResults.regions = [];
            const regionObj = {
                regionName: regionNameDraw,
                regionLatency: Math.trunc(latency),
                regionTime: Math.trunc(time/23),
                regionClass: addClass,
                users: usersCount
            };
            byteCloudResults.regions.push(regionObj);
        } else {
            const regionObj = {
                regionName: regionNameDraw,
                regionLatency: Math.trunc(latency),
                regionTime: Math.trunc(time/23),
                regionClass: addClass,
                users: usersCount
            };
            byteCloudResults.regions.push(regionObj);
        }

    }

    byteCloudResults.regions.sort(function(a, b) {
        return b.users - a.users;
    });
}

// робить все те саме тільки виключно для основного серверу
function connectRegionToMainServer (userList, serverList, callback) {
    let count = 0;

    for (const user of userList) {
        getNearestServer(user, serverList);
        let usersCount = user.usersAmount;
        let latency = firstResults.mainServer.latency;
        let time = latency*10;
        let addClass = user.name;
        let userLeft = user.coordinates.left;
        let userTop = user.coordinates.top-15;
        let regionNameDraw = user.nameDraw;
        let serverClass = firstResults.mainServer.name.regionName;

        if (usersCount == 1) {
            $(`.red.${serverClass}.${addClass}.laptop.st0`).css('opacity','1');
            
            $(`.tech__laptop.${addClass}`).append('<div class="tech__laptop--overlay"></div>');
            $(`.${addClass} .tech__laptop--overlay`).css({
            'content': "''",
            'position': 'absolute',
            'z-index': '2',
            'top': '16.5%',
            'left': '16%',
            'width': '48%',
            'height': '38%',
            'background': 'linear-gradient(to right, #4CA8F9 50%, transparent 50%)',
            'background-size': '200% 100%',
            'background-position': 'left',
            'animation': `slide ${time}ms linear forwards`,
            'transform': 'skewY(-31deg)'
            });              
        } else if (usersCount == 2) {
            $(`.red.${serverClass}.${addClass}.laptop.st0`).css('opacity','1');
            $(`.red.${serverClass}.${addClass}.smartphone.st0`).css('opacity','1');

            $(`.tech__laptop.${addClass}`).append('<div class="tech__laptop--overlay"></div>');
            $(`.${addClass} .tech__laptop--overlay`).css({
            'content': "''",
            'position': 'absolute',
            'z-index': '2',
            'top': '16.5%',
            'left': '16%',
            'width': '48%',
            'height': '38%',
            'background': 'linear-gradient(to right, #4CA8F9 50%, transparent 50%)',
            'background-size': '200% 100%',
            'background-position': 'left',
            'animation': `slide ${time}ms linear forwards`,
            'transform': 'skewY(-31deg)'
            });

            $(`.tech__smartphone.${addClass}`).append('<div class="tech__smartphone--overlay"></div>');
            $(`.${addClass} .tech__smartphone--overlay`).css({
            'content': "''",
            'position': 'absolute',
            'z-index': '2',
            'top': '-9%',
            'left': '33.5%',
            'width': '31%',
            'height': '104%',
            'border-radius': '11%',
            'background': 'linear-gradient(to right, #4CA8F9 50%, transparent 50%)',
            'background-size': '200% 100%',
            'background-position': 'left',
            'animation': `slide ${time}ms linear forwards`,
            'transform': 'rotate(-60deg) skewY(30deg)'
            });  
        } else if (usersCount == 3) {
            $(`.red.${serverClass}.${addClass}.laptop.st0`).css('opacity','1');
            $(`.red.${serverClass}.${addClass}.smartphone.st0`).css('opacity','1');
            $(`.red.${serverClass}.${addClass}.phone.st0`).css('opacity','1');

            $(`.tech__laptop.${addClass}`).append('<div class="tech__laptop--overlay"></div>');
            $(`.${addClass} .tech__laptop--overlay`).css({
            'content': "''",
            'position': 'absolute',
            'z-index': '2',
            'top': '16.5%',
            'left': '16%',
            'width': '48%',
            'height': '38%',
            'background': 'linear-gradient(to right, #4CA8F9 50%, transparent 50%)',
            'background-size': '200% 100%',
            'background-position': 'left',
            'animation': `slide ${time}ms linear forwards`,
            'transform': 'skewY(-31deg)'
            });

            $(`.tech__smartphone.${addClass}`).append('<div class="tech__smartphone--overlay"></div>');
            $(`.${addClass} .tech__smartphone--overlay`).css({
            'content': "''",
            'position': 'absolute',
            'z-index': '2',
            'top': '-9%',
            'left': '33.5%',
            'width': '31%',
            'height': '104%',
            'border-radius': '11%',
            'background': 'linear-gradient(to right, #4CA8F9 50%, transparent 50%)',
            'background-size': '200% 100%',
            'background-position': 'left',
            'animation': `slide ${time}ms linear forwards`,
            'transform': 'rotate(-60deg) skewY(30deg)'
            });

            $(`.tech__phone.${addClass}`).append('<div class="tech__phone--overlay"></div>');
            $(`.${addClass} .tech__phone--overlay`).css({
            'content': "''",
            'position': 'absolute',
            'z-index': '2',
            'top': '17.5%',
            'left': '14%',
            'width': '83%',
            'height': '38%',
            'border-radius': '6%',
            'background': 'linear-gradient(to right, #4CA8F9 50%, transparent 50%)',
            'background-size': '200% 100%',
            'background-position': 'left',
            'animation': `slide ${time}ms linear forwards`,
            'transform': 'skewY(-30deg)'
            });
        }

        new Element (userLeft+'%', userTop+'%').drawTextBox(addClass);
        $(`.${addClass} .text__info`).html(`Latency: ${Math.trunc(latency)}`)
        setTimeout(() => {
            $(`.${addClass} .text__info`).html(`Time: ${Math.trunc(time/23)} sec`);
            count++;
            if (count === userList.length) {
                callback();
            }
        }, time);

        if (!Array.isArray(objectStorageResult.regions)) {
            objectStorageResult.regions = [];
            const regionObj = {
                regionName: regionNameDraw,
                regionLatency: Math.trunc(latency),
                regionTime: Math.trunc(time/23),
                regionClass: addClass,
                users: usersCount
            };
            objectStorageResult.regions.push(regionObj);
        } else {
            const regionObj = {
                regionName: regionNameDraw,
                regionLatency: Math.trunc(latency),
                regionTime: Math.trunc(time/23),
                regionClass: addClass,
                users: usersCount
            };
            objectStorageResult.regions.push(regionObj);
        }

        delete firstResults.mainServer;

    }

    objectStorageResult.regions.sort(function(a, b) {
        return b.users - a.users;
    });
}

// Відмальовує результат по регіону
function drawResults (resultObject, boxClass) {

    let videoQuality;

    if (resultObject.regionTime <= 60) {
        videoQuality = '4K/2160p Ultra HD';
    } else if (resultObject.regionTime <= 90 && resultObject.regionTime > 60) {
        videoQuality = '1080p Full HD';
    } else if (resultObject.regionTime <= 110 && resultObject.regionTime > 90) {
        videoQuality = '750p HD ready';
    } else if (resultObject.regionTime <= 130 && resultObject.regionTime >110) {
        videoQuality = '480p';
    } else if (resultObject.regionTime > 130) {
        videoQuality = '320p';
    }

    let resultBoxHtml = `
    <div class="result__box ${resultObject.regionClass}">
        <div class="result__box__top">
            <p class="region__name">${resultObject.regionName}</p>
            <div class="stars">
                <span class="star five">&#9733;</span>
                <span class="star four">&#9733;</span>
                <span class="star three">&#9733;</span>
                <span class="star two">&#9733;</span>
                <span class="star one">&#9733;</span>
            </div>
        </div>
        <div class="result__box__bottom">
            <div class="results__middle__box">
                <div class="result__latency">
                    Latency <span class="underline">${resultObject.regionLatency}</span>
                </div>
                <div class="result__time">
                    Download time <span class="underline">${resultObject.regionTime} sec</span>
                </div>
            </div>
            <div class="result__video">
                Video streaming <span class="underline">${videoQuality}</span>
            </div>
        </div>
    </div>`;
    $(`.${boxClass}`).append(resultBoxHtml);

    if (resultObject.regionTime <= 60) {
        $(`.${resultObject.regionClass} .result__box__top .stars .one, 
        .${resultObject.regionClass} .result__box__top .stars .two, 
        .${resultObject.regionClass} .result__box__top .stars .three, 
        .${resultObject.regionClass} .result__box__top .stars .four, 
        .${resultObject.regionClass} .result__box__top .stars .five`).addClass('yellow-text');
    } else if (resultObject.regionTime <= 90 && resultObject.regionTime > 60) {
        $(`.${resultObject.regionClass} .one, 
        .${resultObject.regionClass} .two, 
        .${resultObject.regionClass} .three, 
        .${resultObject.regionClass} .four`).addClass('yellow-text');
    } else if (resultObject.regionTime <= 110 && resultObject.regionTime > 90) {
        $(`.${resultObject.regionClass} .one, 
        .${resultObject.regionClass} .two, 
        .${resultObject.regionClass} .three`).addClass('yellow-text');
    } else if (resultObject.regionTime <= 130 && resultObject.regionTime >110) {
        $(`.${resultObject.regionClass} .one, 
        .${resultObject.regionClass} .two`).addClass('yellow-text');
    } else if (resultObject.regionTime > 130) {
        $(`.${resultObject.regionClass} .one`).addClass('yellow-text');
    }
}

// відмальовує усі результати в таблицю
function drawAllResults (regionsResults, boxClass) {
    for (const region of regionsResults) {
        drawResults (region, boxClass);
    }
}

Element.prototype.drawServerChoose = function(region) {
    let serverChooseHtml = `
    <div class="data__choose ${region.regionName}">
        <img src="imgs/circle_shadow.png" alt="">
        <img src="imgs/circle_empty.png" alt=""  class='circle__empty'>
        <img src="imgs/circle_filled.png" alt="" class='circle__filled'>
    </div>`;
    $('.map').append(serverChooseHtml);
    $('.data__choose').last().css({
        left: this.x,
        top: this.y
    });
    $('#text').html('<p>Where is your data? Choose one spot for Object Storage</p>')
    $(`.${region.regionName} .circle__filled`).click(function() {
        if (!Array.isArray(serverChoices.regions)) {
            serverChoices.regions = [];
            const regionObj = {
                regionName: `${region.regionName}`,
                coordinates: {
                    left: `${region.coordinates.left}`,
                    top: `${region.coordinates.top}`
                },
                lineStart: {
                    x: `${region.lineStart.x}`,
                    y: `${region.lineStart.y}`
                }
            };
            serverChoices.regions.push(regionObj);
            new Element (region.location.left, region.location.top).drawServer(`${region.regionName}`);
            setTimeout(() => {
                $('.my__data__region').last().css('opacity', '1');
            }, 100);
            $('#text').html('<p>Chooseminimum two additional spots for ByteCloud and press <span class="button__start__check blocked">Start</span></p>');
          } else {
            const regionObj = {
                regionName: `${region.regionName}`,
                coordinates: {
                    left: `${region.coordinates.left}`,
                    top: `${region.coordinates.top}`
                },
                lineStart: {
                    x: `${region.lineStart.x}`,
                    y: `${region.lineStart.y}`
                }
            };
            serverChoices.regions.push(regionObj);
            new Element (region.location.left, region.location.top).drawCloudServer(`${region.regionName}`);
            setTimeout(() => {
                $('.additional__data__region').last().css('opacity', '1');
            }, 100);
            if (serverChoices.regions.length == 3) {
                $('.button__start__check').removeClass('blocked');
                $('.button__start__check').click(function() {
                    $('.data__choose').css({'display': 'none'});
                    $('#text').html('<p></p>');
                    connectRegionToServer(userChoices.regionsNames, serverChoices.regions, function() {
                        clearCanvas();  
                        setTimeout(() => {
                            connectRegionToMainServer(userChoices.regionsNames, serverChoices.regions, function() {
                                setTimeout(() => {
                                    $('.results__container').css({
                                        'z-index':3,
                                        'display':'grid'});
                                    drawAllResults (byteCloudResults.regions, "result__container__byteCloud");
                                    drawAllResults (objectStorageResult.regions, "result__container__objectStorage");
                                    $('#text').html('<p>Do you Want to <a href="">start again?</a></p>');
                                }, 1500);
                            });
                        }, 3000);
                    });
                });
            } else if (serverChoices.regions.length >= 4) {
                $('.data__choose').css({'display': 'none'});
                $('#text').html('<p></p>');
                connectRegionToServer(userChoices.regionsNames, serverChoices.regions, function() {
                    clearCanvas();  
                    setTimeout(() => {
                        connectRegionToMainServer(userChoices.regionsNames, serverChoices.regions, function() {
                            setTimeout(() => {
                                $('.results__container').css({
                                    'z-index':3,
                                    'display':'grid'});
                                drawAllResults (byteCloudResults.regions, "result__container__byteCloud");
                                drawAllResults (objectStorageResult.regions, "result__container__objectStorage");
                                $('#text').html('<p>Do you Want to <a href="">start again?</a></p>');
                            }, 1500);
                        });
                    }, 3000);
                });
               

            }
          }
        $(this).parent('.data__choose').css('display', 'none');
    });
}

// робить перехід до другого кроку (вибір  серверів)
let secondStep = function () {
    $('.figures__people').css('opacity', '0');
    setTimeout(() => {
        $('.figures__people').css('display', 'none');
    }, 1000)
    new Element (eastUsaServer.location.left, eastUsaServer.location.top).drawServerChoose(eastUsaServer);
    new Element (westUsaServer.location.left, westUsaServer.location.top).drawServerChoose(westUsaServer);
    new Element (germanyServer.location.left, germanyServer.location.top).drawServerChoose(germanyServer);
    new Element (singaporeServer.location.left, singaporeServer.location.top).drawServerChoose(singaporeServer);  
    setTimeout(() => {
        $('.data__choose').css('opacity', '1');
    }, 100);
}

Element.prototype.drawUser = function(region) {
    let usersHtml = `
    <div class="figures__people ${region.regionName}">
        <div class="puple__big">
            <img src="imgs/man_empty.png" alt="" class='empty'>
            <img src="imgs/man_filled.png" alt="" class='filled'>
        </div>
        <div class="puple__medium">
            <img src="imgs/man_empty.png" alt="" class='empty'>
            <img src="imgs/man_filled.png" alt="" class='filled'>
        </div>
        <div class="puple__small">
            <img src="imgs/man_empty.png" alt="" class='empty'>
            <img src="imgs/man_filled.png" alt="" class='filled'>
        </div>
    </div>`;
    $('.map').append(usersHtml);
    $('.figures__people').last().css({
        left: this.x,
        top: this.y
    });

    $(`.${region.regionName} .puple__small`).click(function() {
        new Element (region.laptop.left, region.laptop.top).drawLaptop(region.regionName);
        $(this).parent('.figures__people').css('opacity', '0');
        setTimeout(() => {
            $('.tech__laptop').last().css('opacity', '1');
        }, 100);
        setTimeout(() => {
            $(this).parent('.figures__people').css('display', 'none');
        }, 1000);
        if (!Array.isArray(userChoices.regionsNames)) {
            userChoices.regionsNames = [];
        }
        
        const regionObj = {
        name: `${region.regionName}`,
        nameDraw: `${region.regionNameDraw}`,
        usersAmount: 1,
        coordinates: {
            left: `${region.coordinates.left}`,
            top: `${region.coordinates.top}`
        },
        latency: {
            'eastUsaServer': {
                time: `${region.latency.eastUsaServer.time}`
            },
            'westUsaServer': {
                time: `${region.latency.westUsaServer.time}`
            },
            'germanyServer': {
                time: `${region.latency.germanyServer.time}`
            },
            'singaporeServer': {
                time: `${region.latency.singaporeServer.time}`
            }
    
        }
        };
        
        userChoices.regionsNames.push(regionObj);
        if (!steps['peopleClick']) {
            steps['peopleClick'] = {};
            steps.peopleClick.count = 1;
            $('#text').html('<p>Where are your users? Choose the number for every region. <span class="button__next__people">Next</span></p>')
            $('.button__next__people').click(function() {
                secondStep();
            });
            $(this).off('click');
        } else {
            steps.peopleClick.count += 1;
            if (steps.peopleClick.count == 5) {
                secondStep();
            }
            $(this).off('click');
        }
    });
    $(`.${region.regionName} .puple__medium`).click(function() {
        new Element (region.laptop.left, region.laptop.top).drawLaptop(region.regionName);
        new Element (region.smartphone.left, region.smartphone.top).drawSmartphone(region.regionName);
        $(this).parent('.figures__people').css('opacity', '0');
        setTimeout(() => {
            $('.tech__laptop').last().css('opacity', '1');
            $('.tech__smartphone').last().css('opacity', '1');
        }, 100);
        setTimeout(() => {
            $(this).parent('.figures__people').css('display', 'none');
        }, 1000);
        if (!Array.isArray(userChoices.regionsNames)) {
            userChoices.regionsNames = [];
        }
        
        const regionObj = {
        name: `${region.regionName}`,
        nameDraw: `${region.regionNameDraw}`,
        usersAmount: 2,
        coordinates: {
            left: `${region.coordinates.left}`,
            top: `${region.coordinates.top}`
        },
        latency: {
            'eastUsaServer': {
                time: `${region.latency.eastUsaServer.time}`
            },
            'westUsaServer': {
                time: `${region.latency.westUsaServer.time}`
            },
            'germanyServer': {
                time: `${region.latency.germanyServer.time}`
            },
            'singaporeServer': {
                time: `${region.latency.singaporeServer.time}`
            }
    
        }
        };
        
        userChoices.regionsNames.push(regionObj);
        if (!steps['peopleClick']) {
            steps['peopleClick'] = {};
            steps.peopleClick.count = 1;
            $('#text').html('<p>Where are your users? Choose the number for every region. <span class="button__next__people">Next</span></p>')
            $('.button__next__people').click(function() {
                secondStep();
            });
            $(this).off('click');
        } else {
            steps.peopleClick.count += 1;
            if (steps.peopleClick.count == 5) {
                secondStep();
            }
            $(this).off('click');
        }
    });
    $(`.${region.regionName} .puple__big`).click(function() {
        new Element (region.laptop.left, region.laptop.top).drawLaptop(region.regionName);
        new Element (region.smartphone.left, region.smartphone.top).drawSmartphone(region.regionName);
        new Element (region.phone.left, region.phone.top).drawPhone(region.regionName);
        $(this).parent('.figures__people').css('opacity', '0');
        setTimeout(() => {
            $('.tech__laptop').last().css('opacity', '1');
            $('.tech__smartphone').last().css('opacity', '1');
            $('.tech__phone').last().css('opacity', '1');
        }, 100);
        setTimeout(() => {
            $(this).parent('.figures__people').css('display', 'none');
        }, 1000);
        if (!Array.isArray(userChoices.regionsNames)) {
            userChoices.regionsNames = [];
        }
        
        const regionObj = {
        name: `${region.regionName}`,
        nameDraw: `${region.regionNameDraw}`,
        usersAmount: 3,
        coordinates: {
            left: `${region.coordinates.left}`,
            top: `${region.coordinates.top}`
        },
        latency: {
            'eastUsaServer': {
                time: `${region.latency.eastUsaServer.time}`
            },
            'westUsaServer': {
                time: `${region.latency.westUsaServer.time}`
            },
            'germanyServer': {
                time: `${region.latency.germanyServer.time}`
            },
            'singaporeServer': {
                time: `${region.latency.singaporeServer.time}`
            }
    
        }
        };
        
        userChoices.regionsNames.push(regionObj);
        if (!steps['peopleClick']) {
            steps['peopleClick'] = {};
            steps.peopleClick.count = 1;
            $('#text').html('<p>Where are your users? Choose the number for every region. <span class="button__next__people">Next</span></p>')
            $('.button__next__people').click(function() {
                secondStep();
            });
            $(this).off('click');
        } else {
            steps.peopleClick.count += 1;
            if (steps.peopleClick.count == 5) {
                secondStep();
            }
            $(this).off('click');
        }
    });
}

new Element (northAmericaCoordinates.users.left, northAmericaCoordinates.users.top).drawUser(northAmericaCoordinates);
new Element (southAmericaCoordinates.users.left, southAmericaCoordinates.users.top).drawUser(southAmericaCoordinates);
new Element (europeCoordinates.users.left, europeCoordinates.users.top).drawUser(europeCoordinates);
new Element (asiaCoordinates.users.left, asiaCoordinates.users.top).drawUser(asiaCoordinates);
new Element (oceaniaCoordinates.users.left, oceaniaCoordinates.users.top).drawUser(oceaniaCoordinates);








  