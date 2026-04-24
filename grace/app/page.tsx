import Image from "next/image";

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center bg-white px-6 py-8 md:justify-center md:px-10 md:py-0">

      {/* LOGO */}
      <div className="mb-12 w-full flex justify-start md:absolute md:left-6 md:top-6 md:mb-0">
        <svg width="32" height="48" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 28.5C19 23.2533 14.7467 19 9.5 19C4.2533 19 0 23.2533 0 28.5C0 33.7467 4.2533 38 9.5 38C14.7467 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
          <path d="M0 9.5C0 4.2533 4.2533 0 9.5 0H19V19H9.5C4.2533 19 0 14.7467 0 9.5Z" fill="#F24E1E" />
          <path d="M19 0H28.5C33.7467 0 38 4.2533 38 9.5C38 14.7467 33.7467 19 28.5 19H19V0Z" fill="#FF7262" />
          <path d="M19 19H28.5C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V19Z" fill="#A259FF" />
          <path d="M9.5 38C4.2533 38 0 42.2533 0 47.5C0 52.7467 4.2533 57 9.5 57C14.7467 57 19 52.7467 19 47.5V38H9.5Z" fill="#0ACF83" />
        </svg>
      </div>

      {/* mao ni ang introduction */}
      <div className="w-full max-w-[340px] text-center">
        <h1 className="mb-8 text-[32px] font-semibold leading-[1.1] tracking-tight text-black">
          Log in or create an <br /> account to collaborate
        </h1>

        <div className="space-y-3">
          {/* Google Button */}
          <button className="flex w-full items-center justify-center gap-3 rounded-lg border black-300 py-3 text-[16px] font-medium hover:bg-gray-50 text-black">
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="" className="h-4 w-4" />
            Continue with Google
          </button>

          {/* katong dapit sa or */}
          <div className="flex items-center gap-3 py-2">
            <div className="h-[1px] flex-1 bg-gray-100"></div>
            <span className="text-[15px] text-black">or</span>
            <div className="h-[1px] flex-1 bg-gray-100"></div>
          </div>

          <form className="space-y-1">
            {/* EMAIL INPUT    */}
            <div className="relative flex flex-col h-[52px] w-full rounded-[4px] bg-[#EBEBEB] px-3 text-left transition-all focus-within:bg-white focus-within:ring-1 focus-within:ring-black">
              <label className="pt-1.5 text-[10px] font-bold tracking-widest text-black uppercase pointer-events-none">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-transparent pb-1 text-[13px] text-black outline-none"
                required
              />
            </div>

            {/* PASSWORD INPUT CONTAINER */}
            <div className="relative flex flex-col h-[52px] w-full rounded-[4px] bg-[#EBEBEB] px-3 text-left transition-all focus-within:bg-white focus-within:ring-1 focus-within:ring-black">
              <label className="pt-1.5 text-[10px] font-bold tracking-widest text-black uppercase pointer-events-none">
                Password
              </label>
              <input
                type="password"
                className="w-full bg-transparent pb-1 text-[13px] text-black outline-none"
                required
              />
            </div>

            <button type="submit" className="mt-4 w-full rounded-md bg-black py-3.5 text-[14px] font-bold text-white transition-opacity hover:opacity-90">
              Log in
            </button>
          </form>

          {/* Links */}
          <div className="flex flex-col items-center space-y-3 pt-6 text-[13px] font-medium text-[#18A0FB]">
            <a href="#" className="hover:underline">Use single sign-on</a>
            <a href="#" className="hover:underline">Reset password</a>
            <p className="text-gray-500 font-normal">
              No account? <a href="#" className="font-bold text-[#18A0FB] hover:underline">Create one</a>
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="mt-auto pb-6 text-center text-[10px] text-gray-400 hidden md:block md:absolute md:bottom-6 md:pb-0 w-full">
        Do not sell or share my personal info
      </footer>
    </main>
  );
}