const axios = require("axios")

const http = axios.create({
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Cookie": "53gid2=13312121052002; 53revisit=1695721410037; __tins__4495976=%7B%22sid%22%3A%201696728777831%2C%20%22vd%22%3A%201%2C%20%22expires%22%3A%201696730577831%7D; __51cke__=; __51laig__=1; Hm_lvt_f5653c89a0bc65684a503fe2393135d6=1695777204,1695807246,1695863166,1696728778; Hm_lpvt_f5653c89a0bc65684a503fe2393135d6=1696728778; visitor_type=old; 53gid0=13312121052002; 53gid1=13312121052002; 53kf_72070970_from_host=www.tttuangou.com; 53kf_72070970_keyword=; uuid_53kf_72070970=d372e280de62171b0ee8aadd8de3cc0d; 53kf_72070970_land_page=https%253A%252F%252Fwww.tttuangou.com%252F; kf_72070970_land_page_ok=1; 53uvid=1; onliner_zdfq72070970=0; _csrf=7e077d77ee48b6da06667939922199db1f5eed12790b847e2d687c83a5af2a8aa%3A2%3A%7Bi%3A0%3Bs%3A5%3A%22_csrf%22%3Bi%3A1%3Bs%3A32%3A%22GLolY4x0h_nbkXqCLhpJKpC3JipwCfSc%22%3B%7D; advanced-backend=l9robfha3oh84nu08kpque1es2"
  }
})

const queryExpressConpanyList = async (params) => {
  const url = "https://www.tttuangou.com/backend/web/index.php/Express/express/company"
  const res = await http.post(url, params)
  return res.data
}

const sendExpress = async (params) => {
  const url = "https://www.tttuangou.com/backend/web/index.php/Express/express/deliver_goods"
  const res = await http.post(url, params)
  return res.data
}

const queryOrderList = async (params) => {
  const url = "https://www.tttuangou.com/backend/web/index.php/Order/order/orderlist"
  const res = await http.post(url, params)
  return res.data
}

const dispatchOrder = async (params) => {
  const url = "https://www.tttuangou.com/backend/web/index.php/Order/order/order_send"
  const res = await http.post(url, params)
  return res.data
}

const finishOrder = async (params) => {
  const url = "https://www.tttuangou.com/backend/web/index.php/Order/batch/base-operation"
  const res = await http.post(url, params)
  return res.data
}

const cancelOrder = async (params) => {
  const url = "https://www.tttuangou.com/backend/web/index.php/Order/order_close/afteroperation2"
  const res = await http.post(url, params)
  return res.data
}

const refundOrder = async (params) => {
  const url = "https://www.tttuangou.com/backend/web/index.php/Order/order_close/afteroperation2"
  const res = await http.post(url, params)
  return res.data
}

module.exports = {
  queryExpressConpanyList,
  sendExpress,
  queryOrderList,
  dispatchOrder,
  finishOrder,
  cancelOrder,
  refundOrder,
}