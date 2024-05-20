import type { State } from '@/types/State';
import type { Task } from '../types/Todo';

export default {
    todoList: [
        {
            id: 5
        }
    ],
    listVideo: [
        {
            id: 1,
            image: 'https://s3-alpha-sig.figma.com/img/e460/223f/6f1215c27fbf0f3b9a8bb3d6957782dd?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DccfvOxEtBeZze39C8uoR-fcPFki2LHholzD-KvKrMuN~2wKIMk1L9H-aYGcmeEnZdtqHMP6D9fOzocBTFuVULdD3~UZ1OZm4dI89fBykt8nSPnkxmdDoYrweUK8uTcdZcTKfzP5wWA-l2o3EDPEMz0ckH-zQHn8Dc15BhNwko2dso1Qaosxbsy3shoLjmYaIgOLjb--mYYd-gexuZr29Ds5L4BA6soyYd1Q7nfwn5UP-sapN2svDSAcEjnmCuQ0~xx-6IH8f4BgQo9bvWQA9DdwMLoIXU6L2t~cpXVYPALwGVMf8D-TPr8bBoZbhCWbHhxb5nN9MwaG1lplehVRtw__',
            title: 'Adobe Illustrator Scretch Course',
            description:
                'More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...',
            rate: 4.9,
            review: '1.2k',
            price: 24.92,
            priceOld: 32.9,
            author: 'Kitani Studio',
            discount: 20,
            isBestSeller: true
        },
        {
            id: 2,
            image: 'https://s3-alpha-sig.figma.com/img/abf9/514e/d05dfd544b8a15f8b74e4c60a96534d1?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c5pm9L2iVcsoZPJvKXLhsh3TDONVVSTEcbcQcHP4h3udqdyraEdubT253Dzt9yzscFEQlsbmEY3xNy-V-p1RtyfE3IDJlbHJx34si~UcYawxjZEmaBinYxXbRTcx2eIdR2EplOH1eHbNPV6fUGOCX6vYso1hfGtr80Ydv6PTMLvOl51O6oILuJ9hAiEVcjXfzOjQkNyT2LMGDoj5BeCFn1mGS4lrXIw23~WxKW7FgMx7cxDlLV7APSW7KdoZt5d1PEgtZhCoK9TFQO5HK-yJEuhkRrqNs454~wZmcxN4Es4likjot8T2G~ZPautvHM-ljxS1g7EHgP-i54lYp0K~hA__',
            title: 'Bootcamp  Vue.js Web Framework',
            description:
                'Learn how to make web application with Vue.js Framework   .',
            rate: 4.9,
            review: '1.2k',
            price: 24.92,
            priceOld: 32.9,
            author: 'Kitani Studio',
            discount: 20,
            isBestSeller: true
        },
        {
            id: 3,
            image: 'https://s3-alpha-sig.figma.com/img/3232/9f7e/5ff984311a578929f83ddcf74a23bc31?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jYpv8~wHP~kyQ4ZmBTech4~tM5OwbzL201oCwz8xeAV3OT4lLlgphwDty5SeQ3REyRerAQtTjvsyzx-FgTT~CIOx4cVvUV0rjj~8Flm~a1OZlYApO~8S1IRK-YW-Y8DUqCIqW9vh9nUrQwcDZqMhQ8VkIV-Pm~-zvYBkUkywaukTjQn0lH6GqZV7xoiLx25fEBRwMm~ocfi4fXsnwwmeLkaF8FYRRCFsHdo3vll2dBgzbrX2~feS1n8QUiavKU-ci-vtBZ6tR-iKvWqY~ZzVgIN64wMMvFdlYXP7a2Kzzb1cLiHfRgdMBag3HmA0Y85D-7F73VM9QFUyAVb2YgkSPg__',
            title: 'Design Fundamentals',
            description:
                'More than 8yr Experience as Illustrator.Learn how to becoming professional Illustrator Now...',
            rate: 4.9,
            review: '1.2k',
            price: 24.92,
            priceOld: 32.9,
            author: 'Kitani Studio',
            discount: 20,
            isBestSeller: true
        },
        {
            id: 4,
            image: 'https://s3-alpha-sig.figma.com/img/bea9/9bca/2865041df3ac26b9b339b24e61ba8313?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gjB9rw3Dt6sAmAdwywoMHnO1phM7m6jJGUhNho15aD1SAuyWQMrGcWe~atybs4HJEmAxZO-GOeSrA0FIh725pUiIp2yj~AU~zWyOkunNQYF6-iSiyB5-Qtg6TOsS9lKusWkbbVBoe-fccom0Xbrj-58c~4~NTLUQXz~nUjOvTLjky-w3R8pMFDStrEzv9B6gUOpdrMiq8BzPax8rqKfd90YpMPmkq4yYU4sWJd~cFczWfKzBQOz1z6AoUJWDJ2gGTIwcRE5k597Jm~St5dgI9qHBr79e5JJkdC4g53wVGu1~4ByjaMF9~T2oU-aNPQI8d3NLKYEq63YShjZ3ckiQZQ__',
            title: 'Ionic - Build iOS, Android & Web...',
            description:
                'More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...',
            rate: 4.9,
            review: '1.2k',
            price: 24.92,
            priceOld: 32.9,
            author: 'Kitani Studio',
            discount: 20,
            isBestSeller: true
        },
        {
            id: 5,
            image: 'https://s3-alpha-sig.figma.com/img/ebe6/4b79/a97a2a781199976361a3a5403e2dd1ad?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O3vAazH10xQAnuhfQ7MCFSrpFmgmNlVE828g6yROstvE2g5u3gRWUOTX3Hx-4huiHbvAdgi~244seC76BLk35MYwmB0mGK0bpbeVS7UOudeXlv7l8sGgRZp4FdUGvLK5Hs0-L3lT4uWSZkYGonZ3roBtNx8xqqW6Vj3J2k6klBW3gpqqP1hUrZIx21f5Jf93he-j7qIkUxuHlp1eKWW01HbCWt2duE4apRI7pH1pBgoZM9AQl-f2ctVNX2aKKDRrrDCgiJuWYs5zxUnmTCYZAOVSkf2KewZRJHM4MyHK~YNXGmQXONHVQtRax-0s1sDKTiargX3EE-yEN~XdDmqsMA__',
            title: 'Ionic - Build iOS, Android & Web...',
            description:
                'More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...',
            rate: 4.9,
            review: '1.2k',
            price: 24.92,
            priceOld: 32.9,
            author: 'Kitani Studio',
            discount: 20,
            isBestSeller: true
        },
        {
            id: 6,
            image: 'https://s3-alpha-sig.figma.com/img/e76e/0dda/aa5c5b28b1d5e5591617e909b3b24ccc?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XKPewQQo5zunU0eT8GmeD6DxkCYk51VM0HsnXnmigCp9lGTH9Y2PnUIOEEnr38LmwMsnvzUkbWKdBUSxMzQHXtDNMZkaj4eb-X1sZ0uGPr8jSZe4zYFVMTM81Xk1hqaL-3Nq0v5QKtGiJ0nOWz0sUwXikLVqAd~4~5-lhXrlf5bSGIbRGrMHLp0FIWB~56pJT6ftbqVgIVO9ezkbcnvA0EyqrywAqrk6QmkpyP52LqwjlYarNM30eULtOBUc4m1thh0032xjh8ZQ6ZxCXdYA0sYHTrZ5iBG2I0V7vQDYg4ctkitlNnWsj49zDbWqouk7AD7GKuFz5lPUya~uxqnKYA__',
            title: 'Ionic - Build iOS, Android & Web...',
            description:
                'More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...',
            rate: 4.9,
            review: '1.2k',
            price: 24.92,
            priceOld: 32.9,
            author: 'Kitani Studio',
            discount: 20,
            isBestSeller: true
        },
        {
            id: 7,
            image: 'https://s3-alpha-sig.figma.com/img/328e/56d5/e52d70944073635318e44d132473e832?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b90qDmXf~KSgqnZhXrk9LLRJjYJK1Q6tz~LTuB9luy5OSNOhJsj4pM3rbk6BMf6N-M-ZlFNbrbteoiZmNaGSJP-zU40~g6GclBP0HqGW9Y8uKkKq7IRmMeKNCxQ7NcrJNPhjPaYfN7zc1-B3MTydetMDJq-KygALfYOg3VPIG29eFUV04IspjKx8CqSupmq2PGe3VaOMvkfUCj5NjFiWQ7S~DGQBomRVfslhtxKzXD2JVrin2SD9lXlCBzcOVGwQ~~WJWuyFyAA1gRhGgRNalbcr~BaH5Agz~neET~68Invt~gYzBvMXIVHEyeMOElRuvg8SddcXoQ2P9AL-Y7ubMg__',
            title: 'Ionic - Build iOS, Android & Web...',
            description:
                'More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...',
            rate: 4.9,
            review: '1.2k',
            price: 24.92,
            priceOld: 32.9,
            author: 'Kitani Studio',
            discount: 20,
            isBestSeller: true
        },
        {
            id: 8,
            image: 'https://s3-alpha-sig.figma.com/img/e149/24aa/12827a29123663bc5d0c7e37562ecb36?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Re4iP~g6-uAR9AEjMR1CV2lVn5z1vLS1akndezaheLlbN~AIHrjfovN6oWJfb2SRcoV5S3v2eaE~CqT4Y73caBhNR4l-mjRco7G03wZX0gyQHpcOP~qMLJX-ZDgwJq4r5nymEk8Gq8Rfpp3EcxHYLZyNjygm6RzMkrXcUal7u18ERuwLVP0kIWOd5fa3jrvcu6PUel~NMXEZoOxD70SJrFInWwonNpuXER-3k3FGRB3UkGb1xcRVD0ZzxszvnfWYd3wSSkq6TiS28RFCoV72Pyq~UMZ9DqtGSxnN8ygpztkOVHiGVNiPUcpjHeQ2h~~KFsgjBfwtbRjq26ByFgrYWw__',
            title: 'Ionic - Build iOS, Android & Web...',
            description:
                'More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...',
            rate: 4.9,
            review: '1.2k',
            price: 24.92,
            priceOld: 32.9,
            author: 'Kitani Studio',
            discount: 20,
            isBestSeller: true
        },
        {
            id: 9,
            image: 'https://s3-alpha-sig.figma.com/img/1bc2/886a/ed9056a0b937d9b6dac2d6d756fff2d2?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZAwi57xxvuaZuqWwyNpTxpR7cP2jPRpFbBtG8du0VVm~-xErWPFmY7d0dSmE0d520i2REcCOBal8coj4G9jymQgd34IGpz7mYKzLwRj6uCn-QOlyPcvsVljUnrsz7OellZ7ZGZ4fmqAVWeufPLKapbY0PC8gJwrB0RRaGrtAZsAANJ5nlfgtmwBeWyoBOCbJf9fPi3ao67U74UcalYkDIUhZ7lIgVzx9Vo9JwUoj4LFlrfmW2pVHAOxsHsN0SeJJdV4JNLiDi2PohhKvc2DNRG4~OBnUiXp2mjICLIWflTXgfi62GEMMe7RssEfjEi2UuDy9M48u7Iq-HiUOGw3uSg__',
            title: 'VUE JS SCRATCH COURSE',
            description:
                'More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...',
            rate: 4.9,
            review: '1.2k',
            price: 24.92,
            priceOld: 32.9,
            author: 'Kitani Studio',
            discount: 20,
            isBestSeller: true
        },
        {
            id: 10,
            image: 'https://s3-alpha-sig.figma.com/img/13d6/56b8/53149532a6de40da48658b3f88d91f73?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BNiSVigZxIttSF9Z4dTSZU0OHd9ZAwG6icELz5EI1XFB3p86D1lEzIQsN6venf~J4GIhb1bk6mYYOqcGhBnweAqkgG-LMWqHFQqd9M5GXBGNyIKkZzVe0SgYl-LIZVgQq-iRaYyT4DHjlPuAUsAImvYeNSCHkm0-3KUOt9Q6Ov-sheNQ~UJnkBLhCuISvq---WbFC63mU93MA6-5iKHNXcdAwYxe1jQQVApw6QDxGq5BzVNtpSke1C9FbrMVEMV5hhq9-f1XUTll9y~t~l3D1CHo-EJhnNGJcp75Y4PskQvvJTJknX7ioLG1YgfyyS2Hu30WoLhfXjBmwNZI4ZlL3w__',
            title: 'UI DESIGN FOR BEGINNERS',
            description:
                'Learn how to make web application with Vue.js Framework   .',
            rate: 4.9,
            review: '1.2k',
            price: 24.92,
            priceOld: 32.9,
            author: 'Kitani Studio',
            discount: 20,
            isBestSeller: true
        },
        {
            id: 11,
            image: 'https://s3-alpha-sig.figma.com/img/8bb6/ad24/279a44450b38c3fb0c8168706af3c700?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aUvca63lxNue0uEjNX~EhBgLCTloOjew1wPRPmEDrUUkj43YUSrm4Gk3rCqII3PSJjT-UnC22--rQDER4cyunTkTtcelsCADY~C8UBlDs-wvZsqQlGvWJm~fr576nQeUp9ID9QfSIstv6n6lEWYBivAyN~Nmlbr4mVJSQpUflbHcLvQbIYyU0zTshFarHu6kRKCbojb9pndyyc8plc9ecgTeBnlzfmT9dMJ5nOv3EHxELSSRZJNMGhbXG1oIrvaHIByUYmIxOJ-U8Zx1vXwIEycam0FCyfanpEVbj~wC-NS6XIjO9g0ptL8TFRAxE2HKQ5SsCLSC1zUu~cY0kcHFQw__',
            title: 'MOBILE DEV REACT NATIVE',
            description:
                'More than 8yr Experience as Illustrator.Learn how to becoming professional Illustrator Now...',
            rate: 4.9,
            review: '1.2k',
            price: 24.92,
            priceOld: 32.9,
            author: 'Kitani Studio',
            discount: 20,
            isBestSeller: true
        },
        {
            id: 12,
            image: 'https://s3-alpha-sig.figma.com/img/4052/b68a/1e7b2e53ff988154a520929af731ce8a?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aBls2h-10zU5tWndQeBVykpLSlbinFGOaSHlaBIGzkxkADbkO1kXjYViwEAy5V54wZEoVugsvcicqn0lV6acLK8kO5HK7kW6~dhfFGZsspjLrfx-unjqvHXQuL6s6iD2pUuvJEJQWKN4YdbyY19N~BhIJKo2sHX-onr1b9YAjvzTRMCVl1fYrUxPH1pgPrIftnx~hB5V-zoI5iIBre2qElRWG9NijsfnmwI4V~1CNjrSAkyc4YBQdPyhoIPcsR5HcAktf6F89q1jxXuiptjpGbQExStZ8ilZi5eCcHFFRRWWw9cI40GZruk2dlsn0DeFZgOSjZui8BgY89i1SSfB6g__',
            title: 'WEBSITE DEV ZERO TO HERO',
            description:
                'More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...',
            rate: 4.9,
            review: '1.2k',
            price: 24.92,
            priceOld: 32.9,
            author: 'Kitani Studio',
            discount: 20,
            isBestSeller: true
        }
    ],
    listSearch: [
        {
            id: 1,
            image: 'https://s3-alpha-sig.figma.com/img/e460/223f/6f1215c27fbf0f3b9a8bb3d6957782dd?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DccfvOxEtBeZze39C8uoR-fcPFki2LHholzD-KvKrMuN~2wKIMk1L9H-aYGcmeEnZdtqHMP6D9fOzocBTFuVULdD3~UZ1OZm4dI89fBykt8nSPnkxmdDoYrweUK8uTcdZcTKfzP5wWA-l2o3EDPEMz0ckH-zQHn8Dc15BhNwko2dso1Qaosxbsy3shoLjmYaIgOLjb--mYYd-gexuZr29Ds5L4BA6soyYd1Q7nfwn5UP-sapN2svDSAcEjnmCuQ0~xx-6IH8f4BgQo9bvWQA9DdwMLoIXU6L2t~cpXVYPALwGVMf8D-TPr8bBoZbhCWbHhxb5nN9MwaG1lplehVRtw__',
            title: 'Adobe Illustrator Scretch Course',
            description:
                'More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...',
            rate: 4.9,
            review: '1.2k',
            price: 24.92,
            priceOld: 32.9,
            author: 'Kitani Studio',
            discount: 20,
            isBestSeller: true
        },
        {
            id: 2,
            image: 'https://s3-alpha-sig.figma.com/img/abf9/514e/d05dfd544b8a15f8b74e4c60a96534d1?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c5pm9L2iVcsoZPJvKXLhsh3TDONVVSTEcbcQcHP4h3udqdyraEdubT253Dzt9yzscFEQlsbmEY3xNy-V-p1RtyfE3IDJlbHJx34si~UcYawxjZEmaBinYxXbRTcx2eIdR2EplOH1eHbNPV6fUGOCX6vYso1hfGtr80Ydv6PTMLvOl51O6oILuJ9hAiEVcjXfzOjQkNyT2LMGDoj5BeCFn1mGS4lrXIw23~WxKW7FgMx7cxDlLV7APSW7KdoZt5d1PEgtZhCoK9TFQO5HK-yJEuhkRrqNs454~wZmcxN4Es4likjot8T2G~ZPautvHM-ljxS1g7EHgP-i54lYp0K~hA__',
            title: 'Bootcamp  Vue.js Web Framework',
            description:
                'Learn how to make web application with Vue.js Framework   .',
            rate: 4.9,
            review: '1.2k',
            price: 24.92,
            priceOld: 32.9,
            author: 'Kitani Studio',
            discount: 20,
            isBestSeller: true
        },
        {
            id: 3,
            image: 'https://s3-alpha-sig.figma.com/img/3232/9f7e/5ff984311a578929f83ddcf74a23bc31?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jYpv8~wHP~kyQ4ZmBTech4~tM5OwbzL201oCwz8xeAV3OT4lLlgphwDty5SeQ3REyRerAQtTjvsyzx-FgTT~CIOx4cVvUV0rjj~8Flm~a1OZlYApO~8S1IRK-YW-Y8DUqCIqW9vh9nUrQwcDZqMhQ8VkIV-Pm~-zvYBkUkywaukTjQn0lH6GqZV7xoiLx25fEBRwMm~ocfi4fXsnwwmeLkaF8FYRRCFsHdo3vll2dBgzbrX2~feS1n8QUiavKU-ci-vtBZ6tR-iKvWqY~ZzVgIN64wMMvFdlYXP7a2Kzzb1cLiHfRgdMBag3HmA0Y85D-7F73VM9QFUyAVb2YgkSPg__',
            title: 'Design Fundamentals',
            description:
                'More than 8yr Experience as Illustrator.Learn how to becoming professional Illustrator Now...',
            rate: 4.9,
            review: '1.2k',
            price: 24.92,
            priceOld: 32.9,
            author: 'Kitani Studio',
            discount: 20,
            isBestSeller: true
        },
        {
            id: 4,
            image: 'https://s3-alpha-sig.figma.com/img/bea9/9bca/2865041df3ac26b9b339b24e61ba8313?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gjB9rw3Dt6sAmAdwywoMHnO1phM7m6jJGUhNho15aD1SAuyWQMrGcWe~atybs4HJEmAxZO-GOeSrA0FIh725pUiIp2yj~AU~zWyOkunNQYF6-iSiyB5-Qtg6TOsS9lKusWkbbVBoe-fccom0Xbrj-58c~4~NTLUQXz~nUjOvTLjky-w3R8pMFDStrEzv9B6gUOpdrMiq8BzPax8rqKfd90YpMPmkq4yYU4sWJd~cFczWfKzBQOz1z6AoUJWDJ2gGTIwcRE5k597Jm~St5dgI9qHBr79e5JJkdC4g53wVGu1~4ByjaMF9~T2oU-aNPQI8d3NLKYEq63YShjZ3ckiQZQ__',
            title: 'Ionic - Build iOS, Android & Web...',
            description:
                'More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...',
            rate: 4.9,
            review: '1.2k',
            price: 24.92,
            priceOld: 32.9,
            author: 'Kitani Studio',
            discount: 20,
            isBestSeller: true
        },
        {
            id: 5,
            image: 'https://s3-alpha-sig.figma.com/img/ebe6/4b79/a97a2a781199976361a3a5403e2dd1ad?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O3vAazH10xQAnuhfQ7MCFSrpFmgmNlVE828g6yROstvE2g5u3gRWUOTX3Hx-4huiHbvAdgi~244seC76BLk35MYwmB0mGK0bpbeVS7UOudeXlv7l8sGgRZp4FdUGvLK5Hs0-L3lT4uWSZkYGonZ3roBtNx8xqqW6Vj3J2k6klBW3gpqqP1hUrZIx21f5Jf93he-j7qIkUxuHlp1eKWW01HbCWt2duE4apRI7pH1pBgoZM9AQl-f2ctVNX2aKKDRrrDCgiJuWYs5zxUnmTCYZAOVSkf2KewZRJHM4MyHK~YNXGmQXONHVQtRax-0s1sDKTiargX3EE-yEN~XdDmqsMA__',
            title: 'Ionic - Build iOS, Android & Web...',
            description:
                'More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...',
            rate: 4.9,
            review: '1.2k',
            price: 24.92,
            priceOld: 32.9,
            author: 'Kitani Studio',
            discount: 20,
            isBestSeller: true
        },
        {
            id: 6,
            image: 'https://s3-alpha-sig.figma.com/img/e76e/0dda/aa5c5b28b1d5e5591617e909b3b24ccc?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XKPewQQo5zunU0eT8GmeD6DxkCYk51VM0HsnXnmigCp9lGTH9Y2PnUIOEEnr38LmwMsnvzUkbWKdBUSxMzQHXtDNMZkaj4eb-X1sZ0uGPr8jSZe4zYFVMTM81Xk1hqaL-3Nq0v5QKtGiJ0nOWz0sUwXikLVqAd~4~5-lhXrlf5bSGIbRGrMHLp0FIWB~56pJT6ftbqVgIVO9ezkbcnvA0EyqrywAqrk6QmkpyP52LqwjlYarNM30eULtOBUc4m1thh0032xjh8ZQ6ZxCXdYA0sYHTrZ5iBG2I0V7vQDYg4ctkitlNnWsj49zDbWqouk7AD7GKuFz5lPUya~uxqnKYA__',
            title: 'Ionic - Build iOS, Android & Web...',
            description:
                'More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...',
            rate: 4.9,
            review: '1.2k',
            price: 24.92,
            priceOld: 32.9,
            author: 'Kitani Studio',
            discount: 20,
            isBestSeller: true
        },
        {
            id: 7,
            image: 'https://s3-alpha-sig.figma.com/img/328e/56d5/e52d70944073635318e44d132473e832?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b90qDmXf~KSgqnZhXrk9LLRJjYJK1Q6tz~LTuB9luy5OSNOhJsj4pM3rbk6BMf6N-M-ZlFNbrbteoiZmNaGSJP-zU40~g6GclBP0HqGW9Y8uKkKq7IRmMeKNCxQ7NcrJNPhjPaYfN7zc1-B3MTydetMDJq-KygALfYOg3VPIG29eFUV04IspjKx8CqSupmq2PGe3VaOMvkfUCj5NjFiWQ7S~DGQBomRVfslhtxKzXD2JVrin2SD9lXlCBzcOVGwQ~~WJWuyFyAA1gRhGgRNalbcr~BaH5Agz~neET~68Invt~gYzBvMXIVHEyeMOElRuvg8SddcXoQ2P9AL-Y7ubMg__',
            title: 'Ionic - Build iOS, Android & Web...',
            description:
                'More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...',
            rate: 4.9,
            review: '1.2k',
            price: 24.92,
            priceOld: 32.9,
            author: 'Kitani Studio',
            discount: 20,
            isBestSeller: true
        },
        {
            id: 8,
            image: 'https://s3-alpha-sig.figma.com/img/e149/24aa/12827a29123663bc5d0c7e37562ecb36?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Re4iP~g6-uAR9AEjMR1CV2lVn5z1vLS1akndezaheLlbN~AIHrjfovN6oWJfb2SRcoV5S3v2eaE~CqT4Y73caBhNR4l-mjRco7G03wZX0gyQHpcOP~qMLJX-ZDgwJq4r5nymEk8Gq8Rfpp3EcxHYLZyNjygm6RzMkrXcUal7u18ERuwLVP0kIWOd5fa3jrvcu6PUel~NMXEZoOxD70SJrFInWwonNpuXER-3k3FGRB3UkGb1xcRVD0ZzxszvnfWYd3wSSkq6TiS28RFCoV72Pyq~UMZ9DqtGSxnN8ygpztkOVHiGVNiPUcpjHeQ2h~~KFsgjBfwtbRjq26ByFgrYWw__',
            title: 'Ionic - Build iOS, Android & Web...',
            description:
                'More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...',
            rate: 4.9,
            review: '1.2k',
            price: 24.92,
            priceOld: 32.9,
            author: 'Kitani Studio',
            discount: 20,
            isBestSeller: true
        }
    ],
    instructors: [
        {
            avatar: 'https://s3-alpha-sig.figma.com/img/1422/6848/745ebd09c7f1668bb115736bee727c83?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tfnulm2ZgtoXZxLKisS1WVVQsV2Lw5aNE8FuM6McguV~C6x0kPJWWuIY3x3ZpwSiYk4A9fCU9zCqhX8RxOjHdqVv2Kvbi1VwHwlstTMp6Tn0j-U6AMwfzD2GZ5q6JiDX-L8I~JI2ydjbFxe8LvblfLqKuEM60hnaKKJtFCrtTpy0cODpaMFCHpGg9pqitKJf95R0TBSi6fideRdi~9jWlMyxbMW-bCnPCofCnH0cNB4W8SkshQToMho03pmEf2qJiIOPV-Kti8Oj2weCoEVqZER3JftyVydigy7PGqmzaMAgKCeLUu~wgqmYcH7uHZqHa4Gp39bVKoMS-FzLh9cbAg__',
            name: 'Alexander Bastian',
            description: 'Expert Mobile Engineer'
        },
        {
            avatar: 'https://s3-alpha-sig.figma.com/img/80e9/dd1a/f7f9a7371e8d72d0801ffd7a3e1d6f31?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O3igFjKYs64kHU4AQIgwhQIIWdMkriqBGvvdmbAd2rWILJtu3j6HJ-mKbAupneWECHEDdq1gRF-TKoEs79e5n9VgSdd4PtmRJuoR99sKkB35TIrOlo--C4ZP30627zEyXiHADExdw4NygJYYemOO9Eclhmez-9hWr3A46M~BjAcEEpu0T5BDhpPS45xH22NXghqOp8yW2iTOsYNb10oCTs~~qdT5Fl02A3c~JPIEy7fWfj9eq4XLA79x1gSSETJcLWGtE9A72efUNm7ifzj11I~KnwQWGJjLU1YUb-tgRNb3N2hynFNF9zKqdVF~QUADSdZp3e~oW5q9ZrMxwkobeQ__',
            name: 'Labie Carthaline',
            description: 'Marketing Specialist'
        },
        {
            avatar: 'https://s3-alpha-sig.figma.com/img/4e34/5e5e/4862612c8af439f0369b109eeeb6db45?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nxUhcGRIWECmcCBGUy4WONcdZw~48Nrn8-HaNpdYuZVvw5BRu620Yk1LI5RNA5vWHqJQwMjIf2mpRitNM-q~mWGASArRnK~lhep1YxEJyrO~S1o15A40o-q6vtdgMtV2rf7gu72V7fwtfWFBlv1WFzDZaLaggXWWcEXnQXUEZIbGLrO8ntpgDtwEYgeCXJWMErLFnUl28hwiCkm5sZmFgs3eX2mEjt0CrcRN7NRZsj-02uWW24esmQagmjT0ZnaQQ2zphoyB7Jmmnu7AMwfdGd10uqxOWwhfcDSYacDD5fV235K4~UnYf8~zCCfIjsOZJDlFlpqeNHVzIcM8WQcdww__',
            name: 'Jonathan Doe',
            description: 'Financial Strategiest'
        },
        {
            avatar: 'https://s3-alpha-sig.figma.com/img/d2dc/fcf2/02980a93a70e32c9933d02c02902a5fc?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QC4KrnpkXxLHgz-ecM7f14Jx5PJCAlL6e9I8x7LYRvZqtS36NupOZYHc3iOtrQ3Cx-NV5x7IIQZN8u8WWBxJaNr3MvjtwFTjD9pt-vUibg3BzpLJtegGRzHtM9ZzI351RMs26viz8bsonamVpABzbl08PZM3kkhi1LHhQzhXL90zSd2iVVG7LGrEVOF9j5wFQ3X9FZugpa6~OL99BeuD0KpBMi8ZOmUBm2VmMEbZmV1jI4tcvsMfQvFsqRekeIdf4NOwQL2koTAPxtRvt1WaziXyjGSptyrtAPo7KuwXzekm6RzIP9XQpysphoTn~DlIzM~2D56kAePPJibpAaZw5g__',
            name: 'Kitani Sarasvati',
            description: 'Film Maker & Director'
        }
    ],
    avatar: 'https://s3-alpha-sig.figma.com/img/95bc/a3ec/af6d28d115834f85b6163b6e58e91c7c?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AWaW-7yyEMojae~PAM7lErQjwcgeJ~POJ8iAqAD40~gKH~kTsUPSHHHlL2f8XkwT70puSUFO4tUUeMiRLFRMPMfJqKd8RgD~GlVYirx1z4Xa3r8zW8srW5Gt7~lAczfq5nUxg9wd9JpyMsNp9Ngm2dekcRxKYYQm-osnsYrH1AWsep9X6BaFxDOEK~V7VRmDtrCobuOY4KZ4t4HpMqRLkIs6ZnElyCJhnEM~zHPDtLQC6g36Mt5H5g--Iv~ne6Wx05wOPTm527DgR5cdWuQKPfI-EFlAxNbGd1ZokoPZQFJajrUc9w4noFYDB8c24wRO3tXLRkpaOaPMY-IYEbqD9Q__'
};
