import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
  return (
    <div>
      <h1>Manage Course</h1>
      <form>
        <TextInput name="title"
                   label="Title"
                   value={course.title}
                   onChange={onChange}
                   error={errors.title}/>
        <SelectInput name="authorId"
                     label="Author"
                     value={course.authorId}
                     defaultOption="Select Author"
                     options={allAuthors}
                     onChange={onChange}
                     error={errors.authorId}/>
        <TextInput name="category"
                   label="Category"
                   value={course.category}
                   onChange={onChange}
                   error={errors.category}/>
        <TextInput name="length"
                   label="Length"
                   value={course.length}
                   onChange={onChange}
                   error={errors.length}/>
        <input type="submit"
               disabled={loading}
               value={loading ? 'Saving...' : 'Save'}
               className="btn btn-primary"
               onClick={onSave}/>
      </form>
    </div>
  );
};

CourseForm.propTypes = {
  course: React.PropTypes.object.isRequired,
  allAuthors: React.PropTypes.array,
  onSave: React.PropTypes.func,
  onChange: React.PropTypes.func,
  loading: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default CourseForm;
