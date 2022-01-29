import PeopleList from "components/PeopleList";
import Error from "components/Error";
import { useAppDispatch, useAppSelector } from "rematch-store";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function PeoplePage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const pageId = Number(useParams().pageId) || 1;
  const { loading, error } = useAppSelector(
    (state) => state.loading.models.people
  );

  const { list, count } = useAppSelector((state) => state.people);

  useEffect(() => {
    if (pageId) dispatch.people.getPeople(pageId);
  }, [dispatch, pageId]);

  if (error) return <Error />;

  const handleNavigate = (page: number) => navigate(`/people/${page}`);
  return (
    <PeopleList
      list={list}
      pageId={pageId}
      loading={!!loading}
      total={count}
      handleNavigate={handleNavigate}
    />
  );
}
