// 弹窗功能, vm 是 vue 实例, data 是对象, 
// 根据  data 可以弹出成功或错误的提示框
// const data = {
//     title: '请求失败',
//     type: 'error',
//     message: '---',
// }
const notification = (vm, data) => {
    vm.$notify(data)
}



// 弹窗功能, vm 是 vue 实例, data 是对象, 根据  data 可以弹出成功或错误的提示框
// const data = {
//     type: 'success',
//     message: '----',
// }

const message = (vm, data) => {
    vm.$message(data);
}

const Notice = {
    notification,
    message,
}

export default Notice