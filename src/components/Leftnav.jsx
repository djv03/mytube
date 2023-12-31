import React, { useContext } from 'react'
import LeftNavitems from './LeftNavitems'
import { categories } from '../utils/constants'
import { Context } from '../context/contextApi'
function Leftnav() {
    const { selectedCategory, setSelectedCategory, mobileMenu } = useContext(Context)
    const clickHandler = (name, type) => {
        switch (type) {
            case 'category':
                return setSelectedCategory(name)
            case 'name':
                return setSelectedCategory(name)
            case 'menu':
                return false;
            default:
                break;
        }
    }
    return (
        <div className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10  translate-x-[-240px] md:translate-x-0 transition-all ${mobileMenu ? 'translate-x-[0px]' : ''}`}>
            <div className="flex px-5 flex-col">
                {categories.map((item) => {
                    return (
                        <React.Fragment key={item.name}>
                            <LeftNavitems
                                text={item.type === 'home' ? "home" : item.name}
                                icon={item.icon}
                                action={() => { clickHandler(item.name, item.type) }}
                                className={`${selectedCategory === item.name ? 'bg-white/[0.15] ' : ""}`}
                            />
                            {item.divider && (
                                <hr className='my-5 border-white/[0.2]' />
                            )}
                        </React.Fragment>
                    )
                })}
                <hr className='my-9  border-white/[0.2]' />
                <div className="text-white/[0.5] text-[12px]">Mytube by Dhruvin</div>
                <a href='https://github.com/djv03/mytube' className="text-red-400 text-[18px] mt-2 hover:text-red-600">Github</a>
            </div>
        </div>
    )
}

export default Leftnav
