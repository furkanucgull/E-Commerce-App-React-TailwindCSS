import { SlBasket } from 'react-icons/sl';
import { CiLight } from 'react-icons/ci';
import { FaMoon } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(true);
  const changeTheme = () => {
    const root = document.getElementById('root');
    if (theme) {
      root.style.backgroundColor = 'black';
      root.style.color = '#fff';
    } else {
      root.style.backgroundColor = '#fff';
      root.style.color = 'black';
    }
    setTheme(!theme);
  };
  return (
    <div>
      <div>
        <div className="flex flex-row justify-between items-center border-b-2 border-black">
          <div className="logo flex flex-row items-center gap-5">
            <a onClick={() => navigate('/')} href="">
              <img className="w-24 h-20 object-scale-down " src="./src/images/logo.png" alt="" />
            </a>

            <p className="font-serif italic">E-Commerce</p>
          </div>
          <div className="input flex flex-row items-center gap-24">
            <input
              className="outline-none 
             border-b-2 border-gray-400 py-1
             placeholder:pl-2 placeholder:italic
              "
              placeholder="Search...                  &#128269;"
              type="text"
            />
            <div className="flex flex-row gap-3 text-3xl hover:cursor-pointer">
              {theme ? (
                <FaMoon className="hover:bg-white text-gray-900 rounded-full hover:scale-125" onClick={changeTheme} />
              ) : (
                <CiLight
                  onClick={changeTheme}
                  className="hover:bg-white hover:text-black rounded-full hover:scale-125"
                />
              )}

              <SlBasket />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
