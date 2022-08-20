const str = 'Ехал Грека через реку';
const log = (...args) => console.log(...args);
log(str);
log(str.length);
log(str[0]);
log(str.charAt(0));
log(str.charCodeAt(0));
log(str.indexOf('река'));
log(str.indexOf('ре', 7));
log(str.lastIndexOf('ре'));

log(str.concat(' Кола'));


function substrCount(needle, haystack, offset, length) {
 haystack = haystack.slice(offset, offset + length);
 return haystack.split(needle).length - 1; 
}


let num = substrCount("ре", "Ехал Грека через реку", 5, 15);

function dayBeforeHNY() {
    const current = new Date();
    const currentYear = current.getFullYear();
    const nextYear = currentYear + 1;
    const next = new Date(nextYear, 0);
    //const diff = next.getTime() - current.getTime();
    let diff = next - current;
    diff /= 1000 * 3600 * 24;
    return diff;
}
log(Math.ceil(dayBeforeHNY()).toFixed(2));
