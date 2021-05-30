import { useEffect } from 'react'
import { getOneUser } from '../../store/actions/userAction'
import { dateBuilder } from '../../store/actions/orderActions'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

const UserOrder = ({order}) => {

  const dispatch = useDispatch()
  const history = useHistory()

  let oneUser = useSelector(state => state.userReducer.oneUser)
  let id 

  const sort = () => {
    if(oneUser) {
      let uid = oneUser.uid
      id = uid
    }
  }
  sort()

  const shipping = (
    order.shipping ? 
      <p>Yes</p>
    : <p>No</p>
  )

  const delivered = (
    order.delivered ? 
      <p>Yes</p>
    : <p>No</p>
  )

  const show = () => {
    history.push('/orderdetails/' + order.id)
  }

  useEffect(() => {
    dispatch(getOneUser(id))
  }, [dispatch, id])

  return (
    <tr className="pointer pink-hover" onClick={show}>
      <td>{ order.email }</td>
      <td>{ order.id }</td>
      <td>{ dispatch(dateBuilder(order.createdAt)) }</td>
      <td>${ order.total }</td>
      <td>{ shipping }</td>
      <td>{ delivered }</td>
    </tr>
  )
}

export default UserOrder
