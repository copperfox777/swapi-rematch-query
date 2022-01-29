import { useGetAllPersonsPageNQuery } from "rtk-store/api";
import { useParams, useNavigate } from "react-router-dom";
import PeopleList from "components/PeopleList";
import { getState } from "rtk-store";

export default function PeoplePage() {
  const pageId = +(useParams().pageId || 0);
  const { data, error, isLoading, isFetching, refetch, isSuccess } =
    useGetAllPersonsPageNQuery(pageId);

  const list = data?.results || [];
  const count = data?.count || 0;
  const navigate = useNavigate();
  const handleNavigate = (page: number) => navigate(`/rtk/${page}`);
  if (isSuccess) getState();

  return (
    <PeopleList
      handleNavigate={handleNavigate}
      list={list}
      pageId={pageId}
      loading={!!isFetching}
      total={count}
    />
  );
}
