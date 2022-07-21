const showMsg = (title,duration = 1500, mask = false, icon = 'none', position = "bottom") => {
	if (Boolean(title) === false) {
		return;
	}
	uni.showToast({
		title,
		icon,
		mask,
		duration
	});
}
const showSuccessMsg = (title = '操作成功',duration = 1500, mask = false, icon = 'success', position = "center")=>{
	showMsg(title,duration,mask,icon,position)
}
const showLoadingMsg = (title = '正在加载',duration = 30000, mask = true, icon = 'loading')=>{
	uni.showLoading({
	    title,
		duration,
		mask,
		icon
	});
}
const hideToast = ()=>{
	uni.hideToast();
	uni.hideLoading();
}
export default{
	showMsg,
	showSuccessMsg,
	showLoadingMsg,
	hideToast
}