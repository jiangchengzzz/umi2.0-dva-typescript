/*
 * @Author: 蒋承志
 * @Description: 常见问题
 * @Date: 2020-09-18 11:59:31
 * @LastEditTime: 2020-09-21 15:10:42
 * @LastEditors: 蒋承志
 */
import React, {Component} from 'react';
import './component.less';
import { Pagination } from 'antd';
import request from '@/utils/request';

interface qaType{
}

class CorrelationCase extends Component {
  constructor(props: any){
    super(props)
  }
  state = {
    caseList: [],
    loading: false,
    total: 0,
    pageIndex: 1,
    pageSize: 10
  }

  // 所有的组件（包括子组件）在render执行完之后立即调用，并且只会被调用一次。
  // 组件已经初始化完成
  // DOM树渲染完成
  // Tip: 建议在此请求数据
  componentDidMount() {
    this.getCaseList();
  }
    /**
   * @Description: 获取qa列表数据
   * @return {type}
   * @Author: 蒋承志
   */
  getCaseList() {
    this.setState({
      loading: true
    })
    request.get('/api/common/qaList', {
      params: {
        pageIndex: this.state.pageIndex
      }
    }).then((res: any) => {
      console.log('res :>> ', res);
      this.setState({
        caseList: res.qaList,
        total: res.total
      })
    }).catch( (e: any) => {
    }).finally (() => {
      this.setState({
        loading: false
      })
    })
  }
  itemClick(v: any) {
    console.log('v :>> ', v);
  }
  pageChange(v: number) {
    this.setState({
      pageIndex: v
    }, () => {
      this.getCaseList();
    })
  }
  render() {
    const { caseList, pageIndex, pageSize, total } : any = this.state
    return (
      <div className="correlationCase">
        <div className="dataList">
          {
            caseList.map((v: any, i: number) => {
              return (
                <div className="dataItem" key={v.id} onClick={() => this.itemClick(v)}>
                  <div className="ind">{i + (pageIndex - 1) * pageSize + 1}.</div>
                  <div className="info text-ellipsis">{v.info}</div>
                </div>
              )
            })
          }
        </div>
        <Pagination size="small" total={total} showSizeChanger={false} onChange={(v) => this.pageChange(v)} />
      </div>
    );
  }
}
export default CorrelationCase;