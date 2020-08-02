import Icon from './components/Icon/index'
import SvgAnimation from './components/SvgAnimation/index'
import ImoocLoading from './components/ImoocLoading/index'
import ImoocFlyBox from './components/ImoocFlyBox/index'
import Container from './components/Container/index'
import ImoocLogo from './components/ImoocLogo/index'
import VueCountTo from './components/VueCountTo/index'
import VueEcharts from './components/VueEcharts/index'
import BaseScrollList from './components/BaseScrollList/index'

export default function(Vue) {
  Vue.use(Icon)
  Vue.use(SvgAnimation)
  Vue.use(ImoocLoading)
  Vue.use(ImoocFlyBox)
  Vue.use(Container)
  Vue.use(ImoocLogo)
  Vue.use(VueCountTo)
  Vue.use(VueEcharts)
  Vue.use(BaseScrollList)
}
