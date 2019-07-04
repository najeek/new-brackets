module.exports = function check(str, bracketsConfig) {
	if(str.length % 2 === 0) {
		str = str.split('');
		if(str.length === bracketsConfig[0].length) return true

        for (var i = 0; i < str.length; i++) {

            for (var a = 0; a < bracketsConfig.length; a++) {
                if(str[i] === bracketsConfig[a][0]) {
                   for (var b = str.length; b > i; b--) {
                        if(str[b] === bracketsConfig[a][1] && (b - i + 1) % 2 === 0) {
                            str.splice(i, 1)
                            str.splice(b, 1)
                            --i
                        }   
                   }
                 break
                }         
            }     
        }
          if(str.length === 0) return true
          if(str.length !== 0) return false
	}else {
		return false;
	}
}
