// mở rộng kiểu dữ liệu của REQUEST
import { Request } from 'express'
import User from './models/schemas/users.schemas'
import { TokenPayload } from './models/requests/User.request'
declare module 'express' {
  interface Request {
    user?: User
    decode_email_verify_token?: TokenPayload
    decode_authorization?: TokenPayload
    decode_forgot_password_token?: TokenPayload,
    decode_refresh_token?: TokenPayload
  }
}
