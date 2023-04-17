import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

//gender iconnes
import { faGenderless } from '@fortawesome/free-solid-svg-icons'
import { faMars } from '@fortawesome/free-solid-svg-icons'
import { faVenus } from '@fortawesome/free-solid-svg-icons'


//status iconnes
import { faFaceMehBlank } from '@fortawesome/free-solid-svg-icons'
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons'
import { faFaceDizzy } from '@fortawesome/free-solid-svg-icons'
import { faFaceMeh } from '@fortawesome/free-solid-svg-icons'
import { faTransgender } from '@fortawesome/free-solid-svg-icons'


//species iconnes

import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'
import { faDragon } from '@fortawesome/free-solid-svg-icons'
import { faPersonWalking } from '@fortawesome/free-solid-svg-icons'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import { faPerson } from '@fortawesome/free-solid-svg-icons'
import { faRobot } from '@fortawesome/free-solid-svg-icons'
import { faDisease } from '@fortawesome/free-solid-svg-icons'
import { faPoo } from '@fortawesome/free-solid-svg-icons'
import { faBug } from '@fortawesome/free-solid-svg-icons'


/* ajout des iconnes */
library.add(faUserSecret, faFaceMehBlank, faFaceSmile, faFaceDizzy,faFaceMeh,faGenderless, faMars, faVenus,faTransgender,faUsers, faUserAstronaut, faDragon, faPersonWalking, faDog, faPerson, faRobot,faDisease, faPoo, faBug )


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')