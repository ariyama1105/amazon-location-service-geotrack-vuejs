import Vue from 'vue'

import './styles/quasar.sass'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import {
  Quasar,
  QDialog,
  Notify,
  ClosePopup,
  QScrollArea,
  QLayout,
  QCard,
  QPage,
  QPageContainer,
  QBanner,
  QSpace,
  QCardSection,
  QForm,
  QInput,
  QIcon,
  QCardActions,
  QSeparator,
  QBtn,
  QToolbar,
  QToggle,
  QTooltip,
  QBtnToggle,
  QTable,
  QSelect,
  QBar,
  QBtnGroup
} from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: { QDialog, QScrollArea, QLayout, QCard, QPage, QPageContainer, QBanner, QSpace, 
                QCardSection, QForm, QInput, QIcon, QCardActions, QSeparator, QBtn, QToolbar, 
                QToggle, QTooltip, QBtnToggle, QTable, QSelect, QBar, QBtnGroup },
  directives: { ClosePopup },
  plugins: { Notify }
 })