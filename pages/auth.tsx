import { useCallback, useState } from "react"
import { Input } from "../components/Form"

const Auth = () => {
  const [email, setEmail] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [form, setForm] = useState<string>('login')

  const toggleForm = useCallback(() => {
    setForm((currentValue: string) => currentValue === 'login' ? 'register' : 'login')
  }, [])

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="Logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {form === 'login' ? 'Sign in' : 'Sign up'}
            </h2>
            <div className="flex flex-col gap-4">
              {form === 'register' && (
                <Input 
                  type="text" 
                  value={username} 
                  id="username" 
                  label="Username" 
                  placeholder=" " 
                  onChange={(e) => setUsername(e.target.value)} 
                />
              )}
              <Input 
                type="email" 
                value={email} 
                id="email" 
                label="Email" 
                placeholder=" " 
                onChange={(e) => setEmail(e.target.value)} 
              />
              <Input 
                type="password" 
                value={password} 
                id="password" 
                label="Password" 
                placeholder=" " 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              {form === 'login' ? 'Sign in' : 'Sign up'}
            </button>
            <p className="text-neutral-500 mt-12">
              {form === 'login' ? 'First time using netflix?' : 'Already have an account?'}
              <span onClick={toggleForm} className="text-white ml-1 hover:underline cursor-pointer">
                {form === 'login' ? 'Enter your account' : 'Create an account'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth