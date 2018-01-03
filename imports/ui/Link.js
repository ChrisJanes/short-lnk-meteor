import React from 'react';

import PrivateHeader from './PrivateHeader';
import LinksList from './LinksList';
import AddLink from './AddLink';
import LinksListFilters from './LinksListFilters';

export default (props) => (
  <div>
    <PrivateHeader title="Your Links"/>
    <div className="page-content">
      <LinksListFilters />
      <AddLink />
      <LinksList />
    </div>
  </div>
);
