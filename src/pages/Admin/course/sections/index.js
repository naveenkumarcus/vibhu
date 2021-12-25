import React, { useState } from "react";
import SectionDetail from "./sectionDetail";
import SectionForm from "./sectionForm";
import cloneDeep from "lodash.clonedeep";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { Button, Popconfirm, Switch } from "antd";
import { DeleteOutlined, EditOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { deleteSection, patchSectionPaid } from "../../../../store/effects/course-detail";
import { setSelectedSection } from "../../../../store/actions/course-detail";
import { AdminRouteEndpoints } from "../../../../config/admin";

const Section = ({ data }) => {
  const [isEdit, setIsEdit] = useState(data.id ? false : true);
  const toggleEdit = () => setIsEdit(!isEdit);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const confirm = e => {
    dispatch(deleteSection(id, data.id));
  };

  const togglePaid = (isPaid) => {
    dispatch(patchSectionPaid(id, data.id, { isPaid }));
  };

  const onEdit = e => {
    e.preventDefault();
    toggleEdit();
  };

  const addLesson = e => {
    const _selectedSelction = cloneDeep(data);
    dispatch(setSelectedSection(_selectedSelction));
    history.push(AdminRouteEndpoints.ADMIN_ADD_LESSON_FOR_SECTION.replace(":id", id).replace(":sectionId", _selectedSelction.id));
  };

  const actions = [
    <Switch checkedChildren="paid" unCheckedChildren="free" onChange={togglePaid} checked={data.isPaid} />,
    <Button icon={<PlusCircleOutlined />} type="link" shape="round" onClick={addLesson}>
      Add Lesson
    </Button>,
    <Button icon={<EditOutlined />} type="link" shape="round" onClick={onEdit}>
      Edit Section
    </Button>,
    <Popconfirm title="Are you sure to delete this section?" onConfirm={confirm} okText="Yes" cancelText="No">
      <Button icon={<DeleteOutlined />} type="link" shape="round">
        Delete
      </Button>
    </Popconfirm>,
  ];

  return isEdit ? (
    <SectionForm key={`section_form`} data={data} toggleEdit={toggleEdit} />
  ) : (
    <SectionDetail key={`section_detail_${data.id}`} data={data} toggleEdit={toggleEdit} actions={actions} showAction={true} />
  );
};
export default Section;
