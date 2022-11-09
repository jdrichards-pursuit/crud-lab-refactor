import { Routes, Route } from 'react-router-dom';

import IndexPage from './reusedComponents/IndexPage';
import DisplayIndividualInfo from './reusedComponents/DisplayIndividualInfo';
import Form from './reusedComponents/Form';
import Home from './home/Home';

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={`/screen`}>
        <Route path={`:endpoint`}>
          <Route index element={<IndexPage />} />
          <Route path="new" element={<Form />} />
          <Route path=":id">
            <Route index element={<DisplayIndividualInfo />} />
            <Route path="edit" element={<Form edit={true} />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}
