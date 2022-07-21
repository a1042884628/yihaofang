//手机号验证
export function isPoneAvailable(poneInput) {
    var myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
    if (!myreg.test(poneInput)) {
        return false;
    } else {
        return true;
    }
}