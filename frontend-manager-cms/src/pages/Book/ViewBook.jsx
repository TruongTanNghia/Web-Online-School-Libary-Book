import SelectBox from 'components/SelectBox';
import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Get_All_Author_Cms_Initial } from 'redux/managers/author_slice/author_thunk';
import { reset_detail_book } from 'redux/managers/book_slice/book_slice';
import { Get_Detail_Book_Cms_Initial } from 'redux/managers/book_slice/book_thunk';
import { nationOption } from 'utils/dummy';

const ViewBook = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detailBook = useSelector((state) => state.book.detail_book?.element?.result);
  const authorList = useRef([]);

  // react hook form
  const { register, reset } = useForm();

  useEffect(() => {
    dispatch(Get_Detail_Book_Cms_Initial({ book_id: id })).then((result) => {
      const data = result?.payload?.element?.result;
      reset({ ...data });
    });

    return () => {
      dispatch(reset_detail_book());
    };
  }, []);

  useEffect(() => {
    dispatch(Get_All_Author_Cms_Initial()).then((result) => {
      const data = result?.payload?.element?.result;
      data?.forEach((item) =>
        authorList.current.push({
          value: item.author_id,
          label: `${item.author_id} ${item.name}`,
        }),
      );
    });
  }, []);

  return (
    <form className="w-full mt-10" autoComplete="nope">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="md:w-1/2 w-full">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                Tên tác giả
              </label>
              <input
                disabled
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="name"
                type="text"
                placeholder="Gia Bảo..."
                {...register('name')}
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                Số lượng
              </label>
              <input
                disabled
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="name"
                type="text"
                placeholder="Gia Bảo..."
                {...register('quantity')}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                Vị trí kệ sách
              </label>
              <input
                disabled
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="name"
                type="text"
                placeholder="Gia Bảo..."
                {...register('bookshelf')}
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                Số trang
              </label>
              <input
                disabled
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="name"
                type="text"
                placeholder="Gia Bảo..."
                {...register('page_number')}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                Ngôn ngữ
              </label>

              {detailBook?.language && (
                <SelectBox
                  isDisabled={true}
                  optionData={nationOption}
                  defaultValue={{
                    value: detailBook?.language,
                    label: detailBook?.language,
                  }}
                />
              )}
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="author">
                Tác giả
              </label>
              {detailBook?.author_id && (
                <SelectBox
                  isDisabled={true}
                  defaultValue={{
                    value: detailBook?.author_id,
                    label: detailBook?.author_id,
                  }}
                  optionData={authorList.current}
                />
              )}
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                Tóm tắt sách
              </label>
              <textarea
                disabled
                id="message"
                rows="4"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Tóm tắt sách"
                {...register('description')}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <div className="profile__info__image">
                <div className="profile__info__image__preview">
                  <img src={detailBook?.image_uri} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ViewBook;
