import React from 'react'

export default {
  formateDate(time) {
    if(!time) return '';
    let date = new Date(time);
    return date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate() + ' ' + (date.getHours()<10?('0'+date.getHours()):date.getHours()) + ':' + (date.getMinutes()<10?('0'+date.getMinutes()):date.getMinutes()) + ':' + (date.getSeconds()<10?('0'+date.getSeconds()):date.getSeconds());
  }
}