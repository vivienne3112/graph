var sd = {};
var baseTime = 8;

function createData() {
	sd.name="サンプルユーザ";
	sd.data = createMonth();
	return sd;
}

/**
 * 月生成
 **/
function createMonth() {
	var monthDayMap = [];
	for(var i=0; i<12;i++) {
		monthDayMap[i] = {};
		monthDayMap[i].month=i+1;
		monthDayMap[i].day = baseDateObj();
	}
	return monthDayMap;
}

function baseDateObj() {
	var dateObj = [];
	for(var i=0; i<31; i++) {
		dateObj[i] = {};
		dateObj[i].day = i+1;
		dateObj[i].baseTime = 8;
		dateObj[i].extTime = makeRandom();
	}
	return dateObj;
}

/**
 * ランダム数値生成
 **/
function makeRandom() {
	var ret =  Math.floor(Math.random() * 4);
	return ret;
}

/**
 * うるう年計算
 **/
function isLeapYear(y) {
	return !(y % 4) && (y % 100) || !(y % 400) ? true : false;
}

var littleMonthArr = [2,4,6,9,11];
function isLittleMonth(month) {
	if (littleMonthArr.indexOf(month) >= 0){
		return true;
	}
	return false;
}

function loopEnd(year, month) {

	if(isLittleMonth(month)) {
		if(month == 2) {
			if(isLeapYear(year)) {
				return 29;
			} else {
				return 28;
			}
		}
		return 30;
	}
	return 31;
}

