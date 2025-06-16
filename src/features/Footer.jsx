import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
		<footer className="py-20 text-center text-sm">
			<p>Built and designed by Joshua Duke.</p>
			<p>
				All rights reserved.
				<CopyrightIcon sx={{ fontSize: 14 }} />
			</p>
		</footer>
  );
}

export default Footer