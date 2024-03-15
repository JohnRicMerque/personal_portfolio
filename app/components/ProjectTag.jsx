import React from 'react'

const ProjectTag = ({name, onClick, isSelected}) => {
  const buttonStyles = isSelected
    ? "text-white border-green-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white"
  return (
    <button 
      className={`${buttonStyles} rounded-xl border-2 px-6 py-1 text-sm cursor-pointer`}
      onClick={() => onClick(name)}>
        {name}
    </button>
  )
}

export default ProjectTag
