import { useCallback, useState } from "react"
import config from "../../store/config"

import { translate } from "@galoymoney/client"
import { PhoneNumberInput } from "@galoymoney/react"
import Link from "../link"

import { CaptchaChallenge } from "../login/captcha-callenge"

const LoginComponent = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("")
  const [errorMessage, setErrorMessage] = useState<string | number>("")

  const handleInvalidNumber = useCallback((message: string) => {
    setErrorMessage(translate(message as never))
  }, [])

  return phoneNumber ? (
    <CaptchaChallenge phoneNumber={phoneNumber} />
  ) : (
    <div className="login">
      <div className="intro">
        {translate("Enter your phone number and we'll text you an access code")}
      </div>
      <PhoneNumberInput
        onSuccess={setPhoneNumber}
        onInvalidNumber={handleInvalidNumber}
      />
      {errorMessage && <div className="error">{errorMessage}</div>}
      {config.kratosFeatureFlag && (
        <Link to="/register/email">
          <i aria-hidden className="fas fa-sign-in-alt" />
          <span className="register">{"register via email"}</span>
        </Link>
      )}
    </div>
  )
}

const Login = {
  Small: LoginComponent,
  Large: LoginComponent,
}

export default Login
