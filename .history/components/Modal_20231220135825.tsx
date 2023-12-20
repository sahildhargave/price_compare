import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const Modal = () => {

	const openModel =() => {};
  return (
	<>
	<button type="button" className='btn' onClick={ openModel}>
		Track
	</button>
	<Transition appear show={} as={Fragment}>
		<Dialog as="div" onClose={closeModal} className="dialog-container">
			<div className='min-h-screen px-4 text-center'>

			</div>
		</Dialog>
	</Transition>
	</>
  )
}

export default Modal
