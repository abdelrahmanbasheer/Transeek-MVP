import LowerNavbar from './LowerNavbar'
type Props = {
title:string,
}
const PagesNavbar = ({title }:Props) => {
  return (
    <div className='h-[500px] bg-warehouse-page-image bg-cover'>
      <LowerNavbar></LowerNavbar>
      <h1 className='text-6xl text-white font-bold capitalize p-36'>{title}</h1>
      </div>
  )
}

export default PagesNavbar