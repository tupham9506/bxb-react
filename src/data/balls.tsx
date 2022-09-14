const balls:any = [
  {
    id: 1,
    name: "Điệp viên 001",
    hp: 200,
    skills: [
      {
        id: 1,
        name: 'Lục bạc liên thanh',
        desc: '',
        atk: 10
      },
      {
        id: 2,
        name: 'Sợi xích cầm tù',
        desc: 'Quăng 1 sợi xích trói đối thủ. Nếu mìn đã đặt sẵn thì sẽ kéo đối thủ bay vào phía mìn.',
        atk: 5
      },
      {
        id: 3,
        name: 'Đặt mìn',
        desc: 'Đặt 1 quả mìn tồn tại trong 3 giây. Nếu đối dủ dẫm phải sẽ phát nổ.',
        atk: 30
      },
      {
        id: 4,
        name: 'Pháo cối',
        desc: 'Bắn 1 quả pháo cực mạnh về phía đối thủ',
        atk: 50
      }
    ]
  },
  {
    id: 2,
    name: "Thầy cúng",
    hp: 200,
    skills: [
      {
        id: 1,
        name: 'Cầu bật lửa',
        desc: 'Bắn ra 1 quả cầu lửa',
        atk: 10
      },
      {
        id: 2,
        name: 'Lốc xoáy',
        desc: 'Tạo ra một lốc xoáy đẩy đối thủ ra.',
        atk: 1
      },
      {
        id: 3,
        name: 'Điện 240v',
        desc: 'Bắn ra một tia set cực mạnh.',
        atk: 20
      },
      {
        id: 4,
        name: 'Cầu băng',
        desc: 'Bắn 1 quả cầu băng đóng băng đối thủ trong 2 giây.',
        atk: 40
      }
    ]
  }
];

export default balls;
