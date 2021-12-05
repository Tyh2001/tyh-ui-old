import '../style/index.css'
import TyhButton from '../packages/button'
import TyhTag from '../packages/tag'
import TyhLink from '../packages/link'
import TyhInput from '../packages/input'
import TyhList from '../packages/list'
import TyhCard from '../packages/card'
import TyhMenu from '../packages/menu'
import TyhMenuItem from '../packages/menu-item'
import TyhTips from '../packages/tips'
import TyhMessage from '../packages/message'
import TyhDivision from '../packages/division'
import TyhBackTop from '../packages/backTop'
import TyhIcon from '../packages/icon'
import TyhCrumbs from '../packages/crumbs'
import TyhCrumbsItem from '../packages/crumbs-item'
import TyhAlert from '../packages/alert'
import TyhAvatar from '../packages/avatar'
import TyhAside from '../packages/container/TyhAside'
import TyhContainer from '../packages/container/TyhContainer'
import TyhFooter from '../packages/container/TyhFooter'
import TyhHeader from '../packages/container/TyhHeader'
import TyhMain from '../packages/container/TyhMain'
import TyhImage from '../packages/image'
import TyhSkeleton from '../packages/skeleton'

const components = {
  TyhButton,
  TyhTag,
  TyhLink,
  TyhInput,
  TyhList,
  TyhCard,
  TyhMenu,
  TyhMenuItem,
  TyhDivision,
  TyhBackTop,
  TyhIcon,
  TyhCrumbs,
  TyhCrumbsItem,
  TyhAlert,
  TyhAvatar,
  TyhAside,
  TyhContainer,
  TyhFooter,
  TyhHeader,
  TyhMain,
  TyhImage,
  TyhSkeleton
}

const install = function (Vue) {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
  Vue.prototype.$tips = TyhTips
  Vue.prototype.$message = TyhMessage
}

const tyhUi = {
  version: '1.6.2',
  install
}

export {
  install,
  TyhButton,
  TyhTag,
  TyhLink,
  TyhInput,
  TyhList,
  TyhCard,
  TyhMenu,
  TyhMenuItem,
  TyhDivision,
  TyhBackTop,
  TyhIcon,
  TyhCrumbs,
  TyhCrumbsItem,
  TyhAlert,
  TyhAvatar,
  TyhAside,
  TyhContainer,
  TyhFooter,
  TyhHeader,
  TyhMain,
  TyhImage,
  TyhSkeleton
}

export default tyhUi