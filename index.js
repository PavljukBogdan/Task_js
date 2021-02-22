
let number = 1; //номер завдання

switch (number) {
    //------------- 1 Format phone number -------------//
    case 1:
        //для роботи з різними номерами
        //let phoneInfo = prompt('enter the phone number in \'380677443021\'');
        // if (phoneInfo.length === 12) { //умовна перевірка чи це номер
        //     alert(formatNumber(phoneInfo));
        // } else {
        //     alert('wrong number or format');
        // }
                                                                            //повертаємо стрику зі зміненим номером
    let formatNumber = number => `+ ${number.substring(0,2)} (${number.substring(2,5)}) ${number.substring(5,8)}-${number.substring(8,10)}-${number.substring(10,12)}`;

        console.log(formatNumber('380677443021'));
        break;
    //------------- 2 Valid date -------------//
    case 2:
    function isValid(year,month, day) {
        //створюємо "нову дату" згідно переданих даних
        let date = new Date(year,month - 1,day);
        //виконуємо перевірку року / місяця / дня
        return  date.getFullYear() === year &&
                date.getMonth() === month - 1 &&
                date.getDate() === day;
    }

    console.log(isValid(2000,2,29));
    console.log(isValid(2001,2,29));
        break;
    //------------- 3 Max non-Repetitive -------------//
    case 3:
    function maxNonRepetitive(str) {
        //УВАГА функція знаходить лише останнє входження як вимагає завдання
        let aPointer = 0;
        let bPointer = 0;
        let newStr = ''; //найдвоша послідовність

        let charSet = new Set();

        while (bPointer < str.length) {
            //якщо в колекції символ відсутній
            if (!charSet.has(str.charAt(bPointer))) {
                //додаємо його в коллекцію
                charSet.add(str.charAt(bPointer));
                //якщо довжина str менша за розмір коллекції
                if (newStr.length < charSet.size) {
                    //це і є найдовша послідовність
                    newStr = Array.from(charSet).join('');
                }
                //збільшуємо вказівник
                bPointer++;
            } else {
                //інакше видяляємо даний символ
                charSet.delete(str.charAt(aPointer));
                //збільшуємо вказівник
                aPointer++;
            }
        }
        //повертаємо найбільше входження
        return newStr;
    }

    console.log(maxNonRepetitive('1213212')); //321
    console.log(maxNonRepetitive('1243121')); //4312
    console.log(maxNonRepetitive('ababacsabzab')); //csabz
        break;
    //------------- 4 Print numbers -------------//
    case 4:
    let periodicIterator = function (array, time) {
        for (let i = 0; i < array.length; i++) {
            setTimeout(function () {console.log(array[i])}, i * time); //кожен сетТаймаут отримує індивідуальне значення
        }
    }
    periodicIterator([3,2,4],1000);
        break;
    //------------- 5 Singleton -------------//
    case 5:
    function MySingleton(){
        if (arguments.callee.instance) return arguments.callee.instance;
        return arguments.callee.instance = this;
    }
    //прибрав .download
    MySingleton.prototype = function(url){  };

    var a = MySingleton();
    var b = new MySingleton();
    var c = new MySingleton();
    var d = MySingleton();
    console.log(a===b); // true
    console.log(b===c); // true
    console.log(c===d); // true
    console.log(a===d); // true
        break;
    //------------- 6 Bind -------------//
    case 6:
        //УВАГА збережено розташування об'єкту, та функції як і в тз
        let myBind = function (thisArg, target, arg1, arg2, arg3, ...args) {
        const rest = Array.prototype.slice.call(arguments,2);
        return function () {
            const arr = Array.prototype.slice.call(arguments);
            return target.apply(thisArg,rest.concat(arr));
        }
        };
    var user = "admin:";
    var log = {
        error: myBind(console, console.log, "[Error]", user),
        warning: myBind(console, console.log, "[Warning]", user)
    };
    log.error("File not found!"); // [Error] admin: File not found!
    log.warning("No timezone set!"); // [Warning] admin: No timezone set!
        break
    //------------- 7 Apply -------------//
    case 7:
        //УВАГА збережено розташування об'єкту, та функції як і в тз
        var myApply = function(thisArg, target, args){
        const uniqId = Date.now().toString();
        thisArg[uniqId] = target;
        const result = thisArg[uniqId](...args)
        delete thisArg[uniqId];
        return result;
    };
    myApply(console, console.log, ["[Error]", "admin:", "File not found!"]) // [Error] admin: File not found!
        break;
}