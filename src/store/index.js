import { readonly } from 'vue'
import { UserModule, GlobalModulde } from './user'

export default readonly({
  User: UserModule,
  Global: GlobalModulde
})
