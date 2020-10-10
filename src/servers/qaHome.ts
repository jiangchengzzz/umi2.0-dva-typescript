/*
 * @Author: 蒋承志
 * @Description: file content
 * @Date: 2020-09-27 11:43:51
 * @LastEditTime: 2020-10-10 18:47:46
 * @LastEditors: 蒋承志
 */

import http from '@/utils/http';
import { handleWebStorage } from '@/utils/base';
const accessToken: string = handleWebStorage.getLocalData('access_token');
const tokenType:  string = handleWebStorage.getLocalData('token_type');

// 选择问题类别
export const getQaType = async (data: any) => {
  return http('/portal/qa-new/type', {
    method: 'post',
    data: data
  })
}

// 通过id获取问答
export const getQaDetail = async (data: any) => {
  return http('/portal/qa-new/recommend/detail', {
    method: 'post',
    data: data
  })
}
// 获取问答对话
export const getQa = async (data: any) => {
  return http('/portal/qa-new', {
    method: 'post',
    data: data
  })
}
// 获取常见问题
export const getCommonQa = async (data: any) => {
  return http('/portal/qa-new/recommend', {
    method: 'get',
    data: data
  })
}
// 获取热门标签
export const getLabel = async (data: any) => {
  return http('/portal/qa-new/hot/label', {
    method: 'get',
    data: data
  })
}
// 获取相关案例
export const getCase = async (data: any) => {
  return http('/portal/qa-new/recommend/case', {
    method: 'get',
    data: data
  })
}
// 标记是否已解决
export const setSolveType = async (data: any) => {
  return http('/portal/qa-new/mark', {
    method: 'post',
    data: data
  })
}
// 标记是否已解决
export const getRecord = async (data: any) => {
  return http('/portal/qa-new/record', {
    method: 'get',
    data: data
  })
}
// 收藏相关
// 收藏列表
export const getFavoriteList = async (data: any) => {
  return http('/portal/uc/collection/list', {
    method: 'get',
    data: data,
    headers: {
      Authorization: handleWebStorage.getLocalData('token_type') + handleWebStorage.getLocalData('access_token')
    }
  })
}
// 收藏
export const setFavoriteConfilm = async (data: any) => {
  return http('/portal/uc/collection/list', {
    method: 'post',
    data: data
  })
}
// 取消收藏
export const setFavoriteCancel = async (data: any) => {
  return http('/portal/uc/collection/list', {
    method: 'post',
    data: data
  })
}
// 确认连接
export const confirmSocket = async (data: any) => {
  return http(`/test/api/sxw/dialservice?identity=${data}&nickName={nickName}`, {
    method: 'get',
    data: {}
  })
}