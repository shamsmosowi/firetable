import React, { lazy, Suspense } from "react";
import { FieldType } from "constants/fields";
import { Editors } from "react-data-grid-addons";
import _uniq from "lodash/uniq";

const { AutoComplete } = Editors;

const MultiSelect = lazy(() => import("../Fields/MultiSelect"));
const DateField = lazy(() => import("../Fields/Date"));
const Rating = lazy(() => import("../Fields/Rating"));
const Number = lazy(() => import("../Fields/Number"));
const CheckBox = lazy(() => import("../Fields/CheckBox"));
const UrlLink = lazy(() => import("../Fields/UrlLink"));
const Image = lazy(() => import("../Fields/Image"));
const File = lazy(() => import("../Fields/File"));
const LongText = lazy(() => import("../Fields/LongText"));
const Json = lazy(() => import("../Fields/Json"));
const RichText = lazy(() => import("../Fields/RichText"));
const Color = lazy(() => import("../Fields/Color"));
const Action = lazy(() => import("../Fields/Action"));
const SubTable = lazy(() => import("../Fields/SubTable"));

export const editable = (fieldType: FieldType) => {
  switch (fieldType) {
    case FieldType.date:
    case FieldType.dateTime:
    case FieldType.rating:
    case FieldType.number:
    case FieldType.checkbox:
    case FieldType.multiSelect:
    case FieldType.image:
    case FieldType.file:
    case FieldType.longText:
    case FieldType.richText:
    case FieldType.connectTable:
    case FieldType.subTable:
    case FieldType.color:
    case FieldType.action:
    case FieldType.last:
    case FieldType.json:
      return false;
    default:
      return true;
  }
};

export const onSubmit = (key: string, row: any) => async (value: any) => {
  const collection = row.ref.parent.path;
  const data = { collection, id: row.ref.id, doc: { [key]: value } };

  if (value !== null || value !== undefined) {
    const updatedAt = new Date();
    let updatedFields = [key];
    if (row.updatedFields) {
      updatedFields = _uniq([key, ...row.updatedFields]);
    }
    row.ref.update({ [key]: value, updatedAt, updatedFields });
  }
};

export const DateFormatter = (key: string, fieldType: FieldType) => (
  props: any
) => {
  return (
    <DateField
      {...props}
      onSubmit={onSubmit(key, props.row)}
      fieldType={fieldType}
    />
  );
};

export const onGridRowsUpdated = (event: any) => {
  const { fromRowData, updated, action } = event;
  if (action === "CELL_UPDATE") {
    onSubmit(Object.keys(updated)[0], fromRowData)(Object.values(updated)[0]);
  }
};
export const onCellSelected = (args: any) => {};
export const cellFormatter = (column: any) => {
  const { type, key, options } = column;

  switch (type) {
    case FieldType.date:
    case FieldType.dateTime:
      return DateFormatter(key, type);
    case FieldType.rating:
      return (props: any) => {
        const value = props.row[key];
        return (
          <Suspense fallback={<div />}>
            <Rating
              {...props}
              onSubmit={onSubmit(key, props.row)}
              value={typeof value === "number" ? value : 0}
            />
          </Suspense>
        );
      };
    case FieldType.number:
      return (props: any) => {
        const value = props.row[key];

        return (
          <Suspense fallback={<div />}>
            <Number
              {...props}
              onSubmit={onSubmit(key, props.row)}
              value={typeof value === "number" ? value : undefined}
            />
          </Suspense>
        );
      };
    case FieldType.color:
      return (props: any) => {
        const value = props.row[key];
        return (
          <Suspense fallback={<div />}>
            <Color
              {...props}
              value={value}
              onSubmit={onSubmit(key, props.row)}
            />
          </Suspense>
        );
      };
    case FieldType.checkbox:
      return (props: any) => {
        const value = props.row[key];
        return (
          <Suspense fallback={<div />}>
            <CheckBox
              value={value}
              column={column}
              {...props}
              onSubmit={onSubmit(key, props.row)}
            />
          </Suspense>
        );
      };
    case FieldType.url:
      return (props: any) => {
        const value = props.row[key];
        return (
          <Suspense fallback={<div />}>
            <UrlLink {...props} value={value} />
          </Suspense>
        );
      };
    case FieldType.action:
      return (props: any) => {
        const value = props.row[key];

        return (
          <Suspense fallback={<div />}>
            <Action
              value={value}
              scripts={column.scripts}
              callableName={column.callableName}
              fieldName={key}
              {...props}
              onSubmit={onSubmit(key, props.row)}
            />
          </Suspense>
        );
      };
    case FieldType.multiSelect:
      return (props: any) => {
        const value = props.row[key];
        return (
          <Suspense fallback={<div />}>
            <MultiSelect
              value={value}
              {...props}
              onSubmit={onSubmit(key, props.row)}
              options={options}
            />
          </Suspense>
        );
      };
    case FieldType.image:
      return (props: any) => {
        const value = props.row[key];
        return (
          <Suspense fallback={<div />}>
            <Image
              value={value}
              {...props}
              onSubmit={onSubmit(key, props.row)}
              fieldName={key}
            />
          </Suspense>
        );
      };
    case FieldType.file:
      return (props: any) => {
        const value = props.row[key];

        return (
          <Suspense fallback={<div />}>
            <File
              value={value}
              {...props}
              onSubmit={onSubmit(key, props.row)}
              fieldName={key}
            />
          </Suspense>
        );
      };
    case FieldType.longText:
      return (props: any) => {
        const value = props.row[key];
        return (
          <Suspense fallback={<div />}>
            <LongText
              value={value}
              {...props}
              fieldName={key}
              onSubmit={onSubmit(key, props.row)}
            />
          </Suspense>
        );
      };
    case FieldType.json:
      return (props: any) => {
        const value = props.row[key];
        return (
          <Suspense fallback={<div />}>
            <Json
              value={value}
              {...props}
              fieldName={key}
              onSubmit={onSubmit(key, props.row)}
            />
          </Suspense>
        );
      };
    case FieldType.richText:
      return (props: any) => {
        const value = props.row[key];

        return (
          <Suspense fallback={<div />}>
            <RichText
              value={value}
              {...props}
              fieldName={key}
              onSubmit={onSubmit(key, props.row)}
            />
          </Suspense>
        );
      };
    case FieldType.subTable:
      return (props: any) => {
        return (
          <Suspense fallback={<div />}>
            <SubTable
              fieldName={key}
              {...props}
              parentLabel={column.parentLabel}
              onSubmit={onSubmit(key, props.row)}
            />
          </Suspense>
        );
      };
    default:
      return false;
  }
};

export const singleSelectEditor = (options: string[]) => {
  if (options) {
    const _options = options.map(option => ({
      id: option,
      value: option,
      title: option,
      text: option,
    }));
    return <AutoComplete options={_options} />;
  }

  return <AutoComplete options={[]} />;
};
